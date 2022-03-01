// --------------- CONSTANTS ---------------

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKS_TIME = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// --------------- FUNCTIONS ---------------

const getRandomPositiveInteger = (a, b) => {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


const getRandomPositiveFloat =  (a, b, digits = 1) => {

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
};

const getAvatarAddress = () => {
  let number = getRandomPositiveInteger(1, 10);
  if (number < 10) {
    number = `0${  number}`;
  }
  return `img/avatars/user${  number  }.png`;
};

const getRandomArray = (baseArray) => {
  const length = getRandomPositiveInteger(1, baseArray.length);
  const newArray = new Set ([]);
  for (let i = 0; i < length; i++) {
    const randomElement = getRandomPositiveInteger(0, baseArray.length - 1);
    newArray.add(baseArray[randomElement]);
  }
  return [...newArray];
};

const createObject = () => {
  const latCoordinate = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const lagCoordinate = getRandomPositiveFloat(139.70000, 139.80000, 5);
  const mapObject = {
    author: {
      avatar: getAvatarAddress()
    },
    offer: {
      location: {
        lat: latCoordinate,
        lag: lagCoordinate
      },
      title: 'хата что надо',
      address: `${latCoordinate  } широта ${   lagCoordinate   } долгота`,
      price: getRandomPositiveInteger(0, 100000),
      type: TYPE[getRandomPositiveInteger(0, TYPE.length - 1)],
      rooms: getRandomPositiveInteger(1, 5),
      guests: getRandomPositiveInteger(1, 10),
      checkin: CHECKS_TIME[getRandomPositiveInteger(0, CHECKS_TIME.length - 1)],
      checkout: CHECKS_TIME[getRandomPositiveInteger(0, CHECKS_TIME.length - 1)],
      features: getRandomArray(FEATURES),
      description: 'батоны ЗАМЕЧАТЕЛЬНЫЕ в 10 часов приезжают',
      photos: getRandomArray(PHOTOS)
    }
  };
  return mapObject;
};


const createTestData = (amount) => {
  const arrayData = [];
  for (let i = 0; i <= amount - 1; i++) {
    arrayData.push(createObject());
  }
  return arrayData;
};

createTestData(10);
