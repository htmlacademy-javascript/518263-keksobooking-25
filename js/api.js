import {resetButtonClick} from './form.js';
import { getFiltredList } from './filter.js';
import {SERVER_COMMUNICATE_LINKS} from './const.js';


const getData = (onSuccess, onFail, PINS_COUNT) => {
  fetch(SERVER_COMMUNICATE_LINKS.get)
    .then((response) => response.json())
    .then((pins) => {
      getFiltredList(pins)
        .slice(0, PINS_COUNT)
        .forEach(onSuccess);
    })
    .catch(() => {
      onFail('Кажется Токио вне зоны доступа');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_COMMUNICATE_LINKS.send,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        resetButtonClick();
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
