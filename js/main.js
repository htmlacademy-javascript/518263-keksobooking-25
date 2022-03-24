import {createCard} from './card.js';
import {createTestData} from './data.js';
import {disacticeMode, activeMode} from './mode.js';

const map = document.querySelector('.map');

const testData = createTestData(10);

createCard(testData[0]);

disacticeMode();

map.addEventListener ('click', activeMode);
