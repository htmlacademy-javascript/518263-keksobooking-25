
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TRANSLATED_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const CHECKS_TIME = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const TYPES_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const ROOMS_AND_GUEST = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const TOKYO_CENTER_POINT = {
  lat: 35.67668102325195,
  lng:  139.76868175980965,
};

const SERVER_COMMUNICATE_LINKS = {
  send: 'https://25.javascript.pages.academy/keksobooking',
  get: 'https://25.javascript.pages.academy/keksobooking/data'
};

const MAIN_PIN_ICON_SIZE = {
  width: 52,
  height: 52
};

const MAIN_PIN_ICON_ACHOR = {
  vertical: 26,
  horizontal: 52
};

const AD_PIN_ICON_SIZE = {
  width: 40,
  height: 40
};

const AD_PIN_ICON_ACHOR = {
  vertical: 20,
  horizontal: 40
};

const POPUP_REMOVE_TIME = 2000;

export {TYPES, CHECKS_TIME, FEATURES, PHOTOS, TRANSLATED_TYPES, TYPES_PRICE, ROOMS_AND_GUEST, TOKYO_CENTER_POINT, SERVER_COMMUNICATE_LINKS, POPUP_REMOVE_TIME, MAIN_PIN_ICON_SIZE, MAIN_PIN_ICON_ACHOR, AD_PIN_ICON_SIZE, AD_PIN_ICON_ACHOR};
