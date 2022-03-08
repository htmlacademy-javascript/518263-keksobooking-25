import {dataConst} from './const.js';
import  {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArray} from './util.js';

const getAvatarAddress = () => {
  let number = getRandomPositiveInteger(1, 10);
  if (number < 10) {
    number = `0${  number}`;
  }
  return `img/avatars/user${  number  }.png`;
};


const createObject = ({TYPE, CHECKS_TIME, FEATURES, PHOTOS}) => {
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
    arrayData.push(createObject(dataConst));
  }
  return arrayData;
};

export {createTestData};
