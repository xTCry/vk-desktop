import querystring from 'querystring';
import { VKDesktopUserAgent, AndroidUserAgent } from './utils';
import request from './request';
import store from './store';
import { openModal } from './modals';

export const version = '5.118';

const errorHandlers = {};

function addErrorHandler(codes, fn) {
  for(const code of codes) {
    errorHandlers[code] = fn;
  }
}

// Сессия устарела
addErrorHandler([5], ({ params, data, user, reject }) => {
  // Был передан другой токен
  if (!user || ![user.access_token, user.android_token].includes(params.access_token)) {
    return reject(data.error);
  }

  let id = 0;

  switch (data.error.error_msg.slice(27)) {
    case 'user revoke access for this token.':
    case 'invalid session.':
      id = 0;
      break;

    case 'user is deactivated.':
      id = 1;
      break;

    case 'invalid access_token (2).':
      id = 2;
      break;
  }

  openModal('blocked-account', { id });
});

// Много запросов в секунду / Flood control
addErrorHandler([6, 9], ({ reject }) => {
  setTimeout(reject, 1000);
});

// Internal Server Error
addErrorHandler([10], ({ name, data, reject }) => {
  openModal('error-api', {
    method: name,
    error: data.error,
    retry: reject
  });
});

// Капча
addErrorHandler([14], ({ name, params, data, resolve, reject }) => {
  openModal('captcha', {
    src: data.error.captcha_img,
    send(code) {
      if (name === 'captcha.force') {
        return resolve(1);
      }

      params.captcha_sid = data.error.captcha_sid;
      params.captcha_key = code;

      reject();
    }
  });
});

addErrorHandler([17], async ({ data, reject }) => {
  const { data: redirectPage } = await request(data.error.redirect_uri, { raw: true });
  const goCaptchaLink = 'https://m.vk.com' + redirectPage.match(/<div class="fi_row"><a href="(.+?)" rel="noopener">/)[1];
  const { data: firstCaptchaPage } = await request(goCaptchaLink, { raw: true });
  let success = false;
  let captchaPage = firstCaptchaPage;

  while (!success) {
    const sendUrl = captchaPage.match(/<form action="(.+?)" method="post">/)[1];
    const captchaSid = captchaPage.match(/name="captcha_sid" value="(.+?)">/)[1];

    await new Promise((resume) => {
      openModal('captcha', {
        src: `https://m.vk.com/captcha.php?sid=${captchaSid}`,
        async send(code) {
          const res = await request({
            host: 'm.vk.com',
            path: sendUrl,
            method: 'POST'
          }, {
            raw: true,
            postData: querystring.stringify({
              captcha_sid: captchaSid,
              captcha_key: code
            })
          });

          if (res.statusCode === 302) {
            success = true;
            // Режект в основной функции для повтора вызова метода
            reject();
          } else {
            captchaPage = res.data;
          }

          resume();
        }
      });
    });
  }
});

function vkapi(name, params, { android, vkme } = {}) {
  return new Promise(async (resolve, reject) => {
    const startTime = Date.now();
    const user = store.getters['users/user'];

    params = {
      access_token: user && (android ? user.android_token : user.access_token),
      lang: 'ru',
      v: version,
      ...params
    };

    const { data } = await request({
      host: vkme ? 'api.vk.me' : 'api.vk.com',
      path: `/method/${name}`,
      method: 'POST',
      headers: {
        'User-Agent': android ? AndroidUserAgent : VKDesktopUserAgent
      }
    }, {
      postData: querystring.stringify(params)
    });

    const endTime = Date.now() - startTime;

    if (data.response !== undefined) {
      const logParams = { ...params };

      delete logParams.access_token;
      delete logParams.lang;
      delete logParams.v;
      delete logParams.fields;

      console.log(`[API] ${name} ${endTime}ms`, logParams);

      return resolve(data.response);
    }

    const errorHandler = errorHandlers[data.error.error_code];

    if (errorHandler) {
      errorHandler({ name, params, data, user, resolve, reject });
    } else {
      reject(data.error);
    }
  });
}

const methods = [];
let inWork = false;

async function executeMethod() {
  const [{ data, resolve, reject }] = methods;
  let shift = true;

  try {
    resolve(await vkapi(...data));
  } catch (err) {
    if (err) {
      reject(err);
    } else {
      // Для того, чтобы повторить запрос, я вызываю reject без ошибки
      // и отлавливаю его здесь, чтобы не удалять запрос из очереди.
      shift = false;
    }
  }

  if (shift) {
    methods.shift();
  }

  if (methods.length) {
    executeMethod();
  } else {
    inWork = false;
  }
}

export default function(...data) {
  return new Promise((resolve, reject) => {
    methods.push({ data, resolve, reject });

    if (!inWork) {
      inWork = true;
      executeMethod();
    }
  });
}
