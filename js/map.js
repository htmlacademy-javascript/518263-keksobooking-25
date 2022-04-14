import {activeMode} from './mode.js';
import {TOKYO_CENTER_POINT} from './const.js';
import {createCard} from './card.js';


const map = L.map('map-canvas');
const mapFiltersForm = document.querySelector('.map__filters');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
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
  iconSize: [40, 40],
  iconAnchor: [20, 40],
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

const loadMap = () => {

  pinLayer.clearLayers();

  const adress = document.querySelector('#address');

  map
    .on('load', () => {
      activeMode();
      adress.value = `${TOKYO_CENTER_POINT.lat.toFixed(5)  } ${ TOKYO_CENTER_POINT.lng.toFixed(5)}`;
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
    adress.value = `${latPoint  } ${ lngPoint}`;
  });

};


const resetMap = () => {
  loadMap();
  map.setView({
    lat: TOKYO_CENTER_POINT.lat,
    lng: TOKYO_CENTER_POINT.lng,
  });
  mainPin.setLatLng({
    lat: TOKYO_CENTER_POINT.lat,
    lng: TOKYO_CENTER_POINT.lng,
  });
  mapFiltersForm.reset();
};

export {loadMap, resetMap, createPin};
