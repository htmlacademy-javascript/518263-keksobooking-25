
import {TRANSLATED_TYPES} from './const.js';


const map = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card')
  .content;


const featuresCheck = (cardFeatures, card) => {
  const allFeatures = card.querySelectorAll('.popup__feature');
  const firstCardFeature = cardFeatures.offer.features;
  if (firstCardFeature.length === 0) {
    card.querySelector('.popup__features').classList.add('visually-hidden');
  } else {
    const modifidedFeatures = firstCardFeature.map((feature) => `popup__feature--${  feature}`);
    allFeatures.forEach((featuresItem) => {
      const modifier = featuresItem.classList[1];
      if (!modifidedFeatures.includes(modifier)) {
        featuresItem.remove();
      }
    });
    return firstCardFeature;
  }
};

const getPhotos = (photos, card) => {
  const photosContainer = card.querySelector('.popup__photos');
  if (photos.length === 0) {
    photosContainer.classList.add('visually-hidden');
  } else {
    for (let i = 0; i < photos.length; i++) {
      const imgSamsple = card.querySelector('.popup__photo');
      imgSamsple.src = photos[i];
      photosContainer.append(imgSamsple.cloneNode(true));
    }
    photosContainer.removeChild(photosContainer.lastChild);
  }
};

const cardFragment = document.createDocumentFragment();

const createCard = (data) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__title').textContent = data.offer.title;
  card.querySelector('.popup__text--address').textContent = data.offer.address;
  card.querySelector('.popup__text--price').textContent = `${data.offer.price  } ₽/ночь`;
  card.querySelector('.popup__type').textContent = TRANSLATED_TYPES[data.offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms  } комнаты для ${   data.offer.guests  } гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${   data.offer.checkin  }, выезд до ${  data.offer.checkout}`;
  featuresCheck(data, card);
  card.querySelector('.popup__description').textContent = data.offer.description;
  getPhotos(data.offer.photos, card);
  card.querySelector('.popup__avatar').src = data.author.avatar;

  cardFragment.append(card);
  map.append(cardFragment);
};


export {createCard};
