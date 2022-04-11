import {resetButtonClick} from './form.js';


const getData = (onSuccess, onFail, pinsCount) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((pins) => {
      pins.slice(0, pinsCount).forEach(onSuccess);
    })
    .catch(() => {
      onFail('Кажется Токио вне зоны доступа');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
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
