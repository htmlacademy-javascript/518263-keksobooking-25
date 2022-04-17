import {getActiveMode} from './mode.js';
import {TOKYO_CENTER_POINT, MAIN_PIN_ICON_SIZE, MAIN_PIN_ICON_ACHOR, AD_PIN_ICON_SIZE, AD_PIN_ICON_ACHOR} from './const.js';
import {createCard} from './card.js';


const map = L.map('map-canvas');
const mapFiltersForm = document.querySelector('.map__filters');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_PIN_ICON_SIZE.width, MAIN_PIN_ICON_SIZE.height],
  iconAnchor: [MAIN_PIN_ICON_ACHOR.horizontal, MAIN_PIN_ICON_ACHOR.vertical],
});

const mainPin = L.marker(
  {
    lat: TOKYO_CENTER_POINT.lat,
    lng:  TOKYO_CENTER_POINT.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

const adPinIcon = L.icon ({
  iconUrl: './img/pin.svg',
  iconSize: [AD_PIN_ICON_SIZE.width, AD_PIN_ICON_SIZE.height],
  iconAnchor: [AD_PIN_ICON_ACHOR.horizontal, AD_PIN_ICON_ACHOR.vertical],
});

const pinLayer = L.layerGroup().addTo(map);

const createPin = (point) => {

  const lat = point.location.lat;
  const lng = point.location.lng;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: adPinIcon,
    }
  );
  marker
    .addTo(pinLayer)
    .bindPopup(createCard(point));
};

const address = document.querySelector('#address');

const loadMap = () => {

  pinLayer.clearLayers();

  map
    .on('load', () => {
      getActiveMode();
      address.value = `${TOKYO_CENTER_POINT.lat.toFixed(5)  } ${ TOKYO_CENTER_POINT.lng.toFixed(5)}`;
    })
    .setView({
      lat: TOKYO_CENTER_POINT.lat,
      lng:  TOKYO_CENTER_POINT.lng,
    }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },

  ).addTo(map);


  mainPin.addTo(map);

  mainPin.on('move', (evt) => {
    const latPoint = evt.target.getLatLng().lat.toFixed(5);
    const lngPoint = evt.target.getLatLng().lng.toFixed(5);
    address.value = `${latPoint  } ${ lngPoint}`;
  });

};


const resetMap = () => {
  mapFiltersForm.reset();
  loadMap();
  map.setView({
    lat: TOKYO_CENTER_POINT.lat,
    lng: TOKYO_CENTER_POINT.lng,
  });
  mainPin.setLatLng({
    lat: TOKYO_CENTER_POINT.lat,
    lng: TOKYO_CENTER_POINT.lng,
  });

  setTimeout( () => {
    address.value  = `${TOKYO_CENTER_POINT.lat.toFixed(5)  } ${ TOKYO_CENTER_POINT.lng.toFixed(5)}`;
    address.placeholder  = `${TOKYO_CENTER_POINT.lat.toFixed(5)  } ${ TOKYO_CENTER_POINT.lng.toFixed(5)}`;
  }, 1);

};

export {loadMap, resetMap, createPin};
