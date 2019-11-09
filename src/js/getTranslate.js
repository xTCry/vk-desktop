import store from './store';

// Возвращает индекс массива, который соответствует склонению падежа числительных
// Пример массива: ['рубль', 'рубля', 'рублей']
// Пример ответов: fn(1) = 0; fn(2) = 1; fn(5) = 2;
function caseOfNumber(count) {
  const lastDigits = Math.abs(count) % 100;
  const lastDigit = lastDigits % 10;

  if(lastDigits > 10 && lastDigits < 20) return 2;
  if(lastDigit > 1 && lastDigit < 5) return 1;
  if(lastDigit == 1) return 0;

  return 2;
}

// name - ключ в файлах переводов
// key - если значение перевода это массив, то это индекс перевода
// replaces - массив данных, которые выделяются в переводе как {n}
// number - число, которое надо использовать вместо key для caseOfNumber
export default function(name, key, replaces, number) {
  if(Array.isArray(key)) {
    number = replaces;
    replaces = key;
    key = null;
  }

  if(number != null) key = caseOfNumber(number);
  else if(typeof key == 'boolean') key = key ? 1 : 0;

  let data = store.getters['settings/lang'][name];
  if(key != null) data = data[key];

  if(Array.isArray(replaces)) {
    for(const i in replaces) {
      const regexp = new RegExp(`\\{${i}\\}`, 'g');

      data = String(data).replace(regexp, replaces[i]);
    }
  }

  return data;
}
