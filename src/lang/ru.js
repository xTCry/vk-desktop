export default {
  vk_desktop: 'VK Desktop',
  cancel: 'Отмена',
  close: 'Закрыть',
  logout: 'Выход',
  and: 'и',
  yes: 'Да',
  send: 'Отправить',
  retry: 'Повторить',
  you: 'Вы',
  you2: 'Вас',
  loading: 'Загрузка...',
  delete: 'Удалить',
  search: 'Поиск',

  date_now: 'только что',
  date_at: 'в',
  today: 'сегодня',
  yesterday: 'вчера',
  minutes_ago: ['{0} минуту назад', '{0} минуты назад', '{0} минут назад'],
  hours_ago: ['{0} час назад', '{0} часа назад', '{0} часов назад'],
  months: [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ],
  date_symbols: {
    minute: 'м',
    hour: 'ч',
    day: 'д',
    month: 'м',
    year: 'г'
  },

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
  retry_send_sms: 'Отправить SMS-код можно через {0}',
  available_accounts_list: 'Список доступных аккаунтов',

  menu: {
    messages: 'Сообщения',
    audio: 'Аудиозаписи',
    settings: 'Настройки'
  },

  settings_sections: {
    developers: 'Для разработчиков'
  },

  settings_show_object_ids: 'Отображать id бесед и сообщений в контекстном меню',

  // Сообщения
  im_header_title: 'Сообщения',
  im_messages_view: 'Просмотр сообщений',
  im_choose_chat: 'Выберите диалог, чтобы начать переписку',
  im_choose_chat_to_forward: 'Выберите диалог, чтобы переслать туда сообщения',
  im_chat_members: ['{0} участник', '{0} участника', '{0} участников'],
  im_chat_group: 'Сообщество',
  im_chat_cant_write: 'Отправка сообщений ограничена',
  im_chat_left: 'Вы вышли из беседы',
  im_chat_left_channel: 'Вы отписаны от канала',
  im_chat_kicked: 'Вы исключены из беседы',
  im_user_deleted: 'Страница удалена',
  im_input_placeholder: 'Введите сообщение...',
  im_empty_dialog: 'Ваш список сообщений пуст',
  im_empty_casper_dialog: ['Здесь давно никто не писал.', 'Развейте эту тоску!'],
  im_unread_messages: 'Новые сообщения',
  im_msg_edited: 'ред',
  im_keyboard_pay_with: 'Оплатить через',
  im_no_messages: 'Сообщений нет',
  im_messages_disappeared: 'Сообщения исчезли',
  im_messages_expired: ['{0} сообщение исчезло', '{0} сообщения исчезло', '{0} сообщений исчезло'],
  keyboard_button_not_supported: 'Клавиша не поддерживается',

  im_search_dialogs: 'Диалоги',
  im_search_placeholder: 'Здесь будут видны найденные беседы и сообщения',
  im_search_messages_placeholder: 'Здесь будут видны найденные сообщения',
  im_search_nothing: 'По вашему запросу ничего не найдено',

  im_chat_online: ['Онлайн', 'Онлайн с телефона', 'Онлайн с {0}'],
  im_chat_was_online: ['Был в сети {0}', 'Была в сети {0}'],
  im_chat_online_recently: ['Был в сети недавно', 'Была в сети недавно'],
  im_chat_online_last_week: ['Был в сети на этой неделе', 'Была в сети на этой неделе'],
  im_chat_online_last_month: ['Был в сети в этом месяце', 'Была в сети в этом месяце'],
  im_chat_online_long_ago: ['Был в сети давно', 'Была в сети давно'],
  im_chat_online_not_show: ['Был в сети давно', 'Была в сети давно'],

  im_go_to_first_msg: 'Перейти в начало беседы',
  im_toggle_pinned_msg: ['Показать закрепл. сообщ.', 'Скрыть закрепл. сообщ.'],
  im_unpin_msg: 'Открепить сообщение',
  im_toggle_notifications: ['Включить уведомления', 'Отключить уведомления'],
  im_clear_history: 'Удалить историю',
  im_toggle_left_state: [
    'Покинуть беседу',
    'Отписаться от канала',
    'Вернуться в беседу',
    'Подписаться на канал'
  ],

  im_toggle_pin_peer: ['Закрепить беседу', 'Открепить беседу'],
  im_mark_as_read: 'Отметить прочитанным',

  im_retry_send: 'Повторить отправку',
  im_delete_message: 'Удалить сообщение',
  im_forward_message: 'Переслать сообщение',
  im_forward_messages: 'Переслать сообщения',
  im_forward_messages_here: 'Переслать сюда',

  im_send_typing: 'Отправлять тайпинг',
  im_not_read_messages: 'Нечиталка сообщений',

  im_typing_text: ['{0} печатает', '{0} и {1} печатают', '{0} и еще {1} печатают'],
  im_typing_audio: ['{0} записывает аудио', '{0} и {1} записывают аудио', '{0} и еще {1} записывают аудио'],

  im_message_id: 'ID сообщения',
  im_message_id_copied: 'ID сообщения скопирован',
  im_peer_id: 'ID беседы',
  im_peer_id_copied: 'ID беседы скопирован',

  im_reply_msg: 'Ответить на сообщение',
  im_toggle_msg_pin: ['Закрепить сообщение', 'Открепить сообщение'],
  im_delete_msg: 'Удалить сообщение',
  im_delete_messages: 'Удалить сообщения',
  im_mark_msg_as_spam: 'Пометить как спам',

  im_selected_messages_count: ['{0} сообщение', '{0} сообщения', '{0} сообщений'],

  // Вложения в сообщениях
  im_attachment_deleted: 'Вложение удалено',
  is_message_expired: 'Сообщение исчезло',
  im_replied: 'Ответ на сообщение',
  im_forwarded_some: 'Пересланные сообщения',
  im_forwarded: ['{0} пересланное сообщение', '{0} пересланных сообщения', '{0} пересланных сообщений'],
  im_attachments: {
    geo: ['Местоположение'],
    doc: ['Документ', '{0} документа', '{0} документов'],
    link: ['Ссылка'],
    poll: ['Опрос'],
    wall: ['Запись на стене'],
    call: ['Звонок'],
    gift: ['Подарок'],
    story: ['История'],
    photo: ['Фотография', '{0} фотографии', '{0} фотографий'],
    audio: ['Аудиозапись', '{0} аудиозаписи', '{0} аудиозаписей'],
    video: ['Видеозапись', '{0} видеозаписи', '{0} видеозаписей'],
    event: ['Мероприятие'],
    market: ['Товар'],
    artist: ['Музыкант'],
    sticker: ['Стикер', 'Стикер', 'Стикер'],
    article: ['Статья'],
    podcast: ['Подкаст'],
    graffiti: ['Граффити'],
    wall_reply: ['Комментарий на стене'],
    audio_message: ['Голосовое сообщение'],
    money_request: ['Запрос денег'],
    audio_playlist: ['Плейлист']
  },

  // Сервисные сообщения
  // Все {0} и {1} в дальнейшем оборачиваются в <b></b>
  im_chat_photo_update: [
    '{0} обновили фотографию беседы',
    '{0} обновил фотографию беседы',
    '{0} обновила фотографию беседы'
  ],
  im_chat_photo_remove: [
    '{0} удалили фотографию беседы',
    '{0} удалил фотографию беседы',
    '{0} удалила фотографию беседы'
  ],
  im_chat_create: [
    '{0} создали беседу «{1}»',
    '{0} создал беседу «{1}»',
    '{0} создала беседу «{1}»'
  ],
  im_chat_title_update: [
    '{0} изменили название беседы на «{1}»',
    '{0} изменил название беседы на «{1}»',
    '{0} изменила название беседы на «{1}»'
  ],
  im_chat_pin_message: [
    '{0} закрепили сообщение «{1}»',
    '{0} закрепил сообщение «{1}»',
    '{0} закрепила сообщение «{1}»'
  ],
  im_chat_pin_empty_message: [
    '{0} закрепили сообщение',
    '{0} закрепил сообщение',
    '{0} закрепила сообщение'
  ],
  im_chat_unpin_message: [
    '{0} открепили сообщение',
    '{0} открепил сообщение',
    '{0} открепила сообщение'
  ],
  im_chat_invite_user_by_link: [
    '{0} присоединились к беседе по ссылке',
    '{0} присоединился к беседе по ссылке',
    '{0} присоединилась к беседе по ссылке'
  ],
  im_chat_returned_user: [
    '{0} вернулись в беседу',
    '{0} вернулся в беседу',
    '{0} вернулась в беседу'
  ],
  im_chat_invite_user: [
    '{0} пригласили {1}',
    '{0} пригласил {1}',
    '{0} пригласила {1}'
  ],
  im_chat_left_user: [
    '{0} вышли из беседы',
    '{0} вышел из беседы',
    '{0} вышла из беседы'
  ],
  im_chat_kick_user: [
    '{0} исключили {1}',
    '{0} исключил {1}',
    '{0} исключила {1}'
  ],
  im_chat_screenshot: [
    '{0} сделали скриншот беседы',
    '{0} сделал скриншот беседы',
    '{0} сделала скриншот беседы'
  ],

  im_chat_group_call_started: [
    '{0} начали групповой звонок',
    '{0} начал групповой звонок',
    '{0} начала групповой звонок'
  ],

  // Короткие версии, отображаемые в списке диалогов
  im_chat_invite_user_short: [
    '{0} пригласили в беседу',
    '{0} пригласили в беседу',
    '{0} пригласили в беседу'
  ],
  im_chat_kick_user_short: [
    '{0} исключили из беседы',
    '{0} исключили из беседы',
    '{0} исключили из беседы'
  ],

  // Модалки
  ml_auth_header: 'Авторизация',

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

  ml_captcha_header: 'Введите капчу',
  ml_captcha_write: 'Введите код с картинки',

  ml_clear_history_header: 'Удалить все сообщения',
  ml_clear_history_text: 'Вы действительно хотите удалить всю переписку в этой беседе?',

  ml_delete_messages_header: 'Удаление сообщения',
  ml_delete_messages_text: 'Вы действительно хотите удалить {0}?',
  ml_delete_messages_count: ['{0} сообщение', '{0} сообщения', '{0} сообщений'],
  ml_delete_messages_for_all: 'Удалить для всех',

  ml_error_api_header: 'Internal Server Error',
  ml_error_api: 'При вызове метода {0} произошла ошибка со стороны API. Подождите немного и повторите вызов.',
  ml_error_cancel_warn: 'Отмена вызова метода может поломать работу приложения.',

  ml_logout_header: 'Выход из аккаунта',
  ml_logout_sure: 'Вы действительно хотите выйти из аккаунта?',

  ml_multiacc_header: 'Выберите аккаунт',
  ml_multiacc_add_account: 'Добавить аккаунт',
  ml_multiacc_active_account: 'Активный аккаунт'
};
