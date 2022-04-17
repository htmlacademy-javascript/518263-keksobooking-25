import {getDisableMode} from './mode.js';
import {loadMap, createPin} from './map.js';
import {showAlert} from './util.js';
import {getData} from './api.js';
import { debounce } from './util.js';


getDisableMode();

const mapFiltersForm = document.querySelector('.map__filters');

const RERENDER_DELAY = 1000;

const PINS_COUNT = 10;

mapFiltersForm.addEventListener('change', () => {
  loadMap();
  debounce(getData(createPin, showAlert, PINS_COUNT), RERENDER_DELAY);
});

getData(createPin, showAlert, PINS_COUNT);
loadMap();
