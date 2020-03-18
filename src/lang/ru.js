export default {
  cancel: 'Отмена',
  logout: 'Выход',
  yes: 'Да',
  send: 'Отправить',
  retry: 'Повторить',

  // Авторизация
  enter_login: 'Введите логин',
  enter_password: 'Введите пароль',
  login: 'Войти',
  auth_errors: {
    invalid_client: 'Неверный логин или пароль',
    account_banned: 'Ваша страница заблокирована'
  },

  security_check: 'Проверка безопасности',
  code_sent_to: [
    'Код отправлен на номер {0}',
    'Введите код из сообщения от Администрации или из приложения для генерации кодов'
  ],
  enter_code: 'Введите код',
  wrong_code: 'Неверный код',
  use_force_sms: 'Использовать SMS-код',
  available_accounts_list: 'Список доступных аккаунтов',

  menu: {
    messages: 'Сообщения',
    settings: 'Настройки'
  },

  settings_sections: {
    developers: 'Для разработчиков'
  },

  // Сообщения
  im_header_title: 'Сообщения',
  im_choose_chat: 'Выберите диалог, чтобы начать переписку',

  ml_captcha_header: 'Введите капчу',
  ml_captcha_write: 'Введите код с картинки',

  ml_logout_header: 'Выход из аккаунта',
  ml_logout_sure: 'Вы действительно хотите выйти из аккаунта?',

  ml_blocked_account_title: [
    'Сессия недействительна',
    'Страница удалена',
    'Страница заблокирована'
  ],
  ml_blocked_account_content: [
    `Возможно, вы удалили приложение из списка активных либо завершили все сеансы.<br><br>
    Дальнейшая работа приложения невозможна.`,
    `Ваша страница удалена.<br><br>
    После восстановления страницы вы можете снова пользоваться приложением.`,
    `Ваша страница была заблокирована.<br><br>
    Восстановите аккаунт и вернитесь позже.`
  ],
  ml_blocked_account_logout: 'Выйти из аккаунта',
  ml_blocked_account_close_app: 'Закрыть приложение',

  ml_multiacc_header: 'Выберите аккаунт',
  ml_multiacc_add_account: 'Добавить аккаунт',
  ml_multiacc_active_account: 'Активный аккаунт',

  ml_auth_header: 'Авторизация',

  ml_error_api: 'При вызове метода {0} произошла ошибка со стороны API. Подождите немного и повторите вызов.',
  ml_error_cancel_warn: 'Отмена вызова метода может поломать работу приложения.'
};
