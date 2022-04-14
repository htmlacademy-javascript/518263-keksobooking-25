const mapFiltersForm = document.querySelector('.map__filters');
const typeField = mapFiltersForm.querySelector('#housing-type');
const priceField = document.querySelector('#housing-price');
const roomsField = document.querySelector('#housing-rooms');
const guestField = document.querySelector('#housing-guests');

const FILTER_PRICE = {
  low: 10000,
  high: 50000,
};


const filterType = (item) => {
  if (item.offer.type === typeField.value) {
    return item;
  }
};

const filterPrice = (item) => {
  switch (priceField.value) {
    case 'low': {
      return item.offer.price <= FILTER_PRICE.low;
    }

    case 'middle': {
      return item.offer.price >= FILTER_PRICE.low && item.offer.price <= FILTER_PRICE.high;
    }
    case 'high': {
      return item.offer.price >= FILTER_PRICE.high;
    }
  }
};


const filterRooms = (item) => {
  if (item.offer.rooms === Number(roomsField.value)) {
    return item;
  }
};

const filterGuest = (item) => {
  if (item.offer.guests === Number(guestField.value)) {
    return item;
  }
};

const filterFeatures = (item) => {

  const selectedFeatures = Array.from(document.querySelectorAll('.map__checkbox:checked'), (inp) => inp.value);

  if (item.offer.features)  {
    if (selectedFeatures.every((feature) => item.offer.features.includes(feature))) {
      return item;
    }
    return false;
  }
};


const getFiltredList = (list) => {
  if (typeField.value !== 'any') {
    list = list.filter(filterType);
  }

  if (priceField.value !== 'any') {
    list = list.filter(filterPrice);
  }

  if (roomsField.value !== 'any') {
    list = list.filter(filterRooms);
  }

  if (guestField.value !== 'any') {
    list = list.filter(filterGuest);
  }
  const features = document.querySelectorAll('.map__checkbox:checked');

  if (features.length > 0 ) {
    list = list.filter(filterFeatures);
  }

  return list;

};


export {getFiltredList};
