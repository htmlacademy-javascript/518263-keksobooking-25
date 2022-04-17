import {TYPES_PRICE, ROOMS_AND_GUEST, POPUP_REMOVE_TIME} from './const.js';
import {sendData} from './api.js';
import {showErrorMessage, showSuccessMessage, removePopup} from './popup.js';
import {resetMap} from './map.js';
import {getAvatarPreview, getHousePhotosPreview, resetPhotosreview} from './images.js';


const adForm = document.querySelector('.ad-form');

const slider = adForm.querySelector('.ad-form__slider');

const validateForm = () => {

  const pristine = new Pristine(adForm, {
    classTo: 'ad-form__element',
    errorTextTag: 'span',
    errorTextParent: 'ad-form__element'
  });

  //========================Валидация заголовка========================

  const validateTitle = (value) => value.length >= 30 && value.length <= 100;

  pristine.addValidator(
    adForm.querySelector('#title'),
    validateTitle,
    'От 30 до 100 символов'
  );

  //========================Валидация количества комнат и гостей========================

  const guestsCapacityField = adForm.querySelector('#capacity');
  const roomNumberField = adForm.querySelector('#room_number');

  const validateRooms = () => {
    const roomNumber = adForm.querySelector('#room_number').value;
    const guestsCapacity = adForm.querySelector('#capacity').value;
    return ROOMS_AND_GUEST[roomNumber].includes(guestsCapacity);
  };

  const printErrorRoomsMessage = () => {
    if (roomNumberField.value === '100' || guestsCapacityField.value === '0') {
      return '';
    }
    return  `Мало комнат для ${  guestsCapacityField.value  } гостей`;
  };

  const printErrorGuestsMessage = () => {
    if (guestsCapacityField.value === '0' || roomNumberField.value === '100') {
      return '100 комнат не для гостей';
    }
    return  `Много гостей для ${  roomNumberField.value  } комнат`;
  };

  pristine.addValidator(roomNumberField, validateRooms, printErrorRoomsMessage);
  pristine.addValidator(guestsCapacityField, validateRooms, printErrorGuestsMessage);

  const validateRoomsGuest = () => {
    pristine.validate(roomNumberField);
    pristine.validate(guestsCapacityField);
  };

  roomNumberField.addEventListener('change', validateRoomsGuest);
  guestsCapacityField.addEventListener('change', validateRoomsGuest);

  //========================Валидация типа и цены========================

  const typeField = adForm.querySelector('#type');
  const priceField = adForm.querySelector('#price');

  const checkType = () => {
    const type = typeField.value;
    priceField.placeholder = TYPES_PRICE[type];
    priceField.min = TYPES_PRICE[type];
  };


  const getMinPrice = () =>{
    const type = typeField.value;
    priceField.min = TYPES_PRICE[type];
    return TYPES_PRICE[type] <= priceField.value;
  };

  const getErrorPriceMessage = () => `Минимальная цена за ночь ${  priceField.min}`;

  pristine.addValidator(priceField, getMinPrice, getErrorPriceMessage);

  const validatePrice = () => {
    pristine.validate(priceField);
  };

  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100000,
    },
    start: priceField.min,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return value;
      },
    },
  });


  let isInit = true;
  slider.noUiSlider.on('update', () => {
    if (isInit) {
      isInit = false;
    } else {
      validatePrice();
    }
    priceField.value = slider.noUiSlider.get();
    checkType();
  });

  priceField.addEventListener('change', () => {
    slider.noUiSlider.set(priceField.value);
    checkType();
    validatePrice();
  });

  typeField.addEventListener('change', (evt) =>{
    if (evt.target.tagName === 'SELECT') {
      checkType();
      validatePrice();
      if (!priceField.value) {
        slider.noUiSlider.set(priceField.min);
        priceField.value = '';
      }
    }
  });

  priceField.value = '';


  //========================Добавление фотографий========================

  getAvatarPreview();

  getHousePhotosPreview();


  //========================Валидация времени заезда и выезда========================

  const timeinField = adForm.querySelector('#timein');
  const timeoutField = adForm.querySelector('#timeout');

  const timeField = adForm.querySelector('.ad-form__element--time');

  timeField.addEventListener('change', (evt) => {
    switch (evt.target.value) {
      case timeoutField.value:
        timeinField.value = timeoutField.value;
        break;
      case timeinField.value:
        timeoutField.value = timeinField.value;
        break;
    }
  });

  const submitButton = document.querySelector('.ad-form__submit');

  const blockSubmitButton = () => {
    submitButton.disabled = true;
    submitButton.textContent = 'Отправляю...';
  };

  const unblockSubmitButton = () => {
    submitButton.disabled = false;
    submitButton.textContent = 'Опубликовать';
  };


  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(
        () => {
          showSuccessMessage();
          unblockSubmitButton();

          setTimeout( () => {
            removePopup();
          }, POPUP_REMOVE_TIME);
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });

};

const resetButtonClick = () => {
  adForm.reset();
  slider.noUiSlider.reset();
  resetPhotosreview();
  resetMap();
};

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', resetButtonClick);

export {validateForm, resetButtonClick};
