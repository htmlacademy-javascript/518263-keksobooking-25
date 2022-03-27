import {TYPES_PRICE, ROOMS_AND_GUEST} from './const.js';

const validateForm = () => {

  const adForm = document.querySelector('.ad-form');

  const pristine = new Pristine(adForm, {
    classTo: 'ad-form__element',
    errorTextTag: 'span',
    errorTextParent: 'ad-form__element'
  });

  //========================Валидация заголовка========================

  function validateTitle (value) {
    return value.length >= 30 && value.length <= 100;
  }

  pristine.addValidator(
    adForm.querySelector('#title'),
    validateTitle,
    'От 30 до 100 символов'
  );

  //========================Валидация количества комнат и гостей========================

  const guestsCapacityField = adForm.querySelector('#capacity');
  const roomNumberField = adForm.querySelector('#room_number');

  function validateRooms() {
    const roomNumber = adForm.querySelector('#room_number').value;
    const guestsCapacity = adForm.querySelector('#capacity').value;
    return ROOMS_AND_GUEST[roomNumber].includes(guestsCapacity);
  }

  function printErrorRoomsMessage() {
    if (roomNumberField.value === '100' || guestsCapacityField.value === '0') {
      return 'Не для гостей';
    }
    return  `Мало комнат для ${  guestsCapacityField.value  } гостей`;
  }

  function printErrorGuestsMessage() {
    if (guestsCapacityField.value === '0' || roomNumberField.value === '100') {
      return '';
    }
    return  `Много гостей для ${  roomNumberField.value  } комнат`;
  }

  pristine.addValidator(roomNumberField, validateRooms, printErrorRoomsMessage);
  pristine.addValidator(guestsCapacityField, validateRooms, printErrorGuestsMessage);

  function validateRoomsGuest() {
    pristine.validate(roomNumberField);
    pristine.validate(guestsCapacityField);
  }

  roomNumberField.addEventListener('change', validateRoomsGuest);
  guestsCapacityField.addEventListener('change', validateRoomsGuest);

  //========================Валидация типа и цены========================

  const typeField = adForm.querySelector('#type');
  const priceField = adForm.querySelector('#price');

  function checkType() {
    const type = typeField.value;
    priceField.placeholder = TYPES_PRICE[type];
    priceField.min = TYPES_PRICE[type];
  }


  function getMinPrice(){
    const type = typeField.value;
    priceField.min = TYPES_PRICE[type];
    return TYPES_PRICE[type] < priceField.value;
  }

  function getErrorPriceMessage() {
    return `Минимальная цена за ночь ${  priceField.min}`;
  }

  pristine.addValidator(priceField, getMinPrice, getErrorPriceMessage);

  function validatePrice() {
    pristine.validate(priceField);
  }

  typeField.addEventListener('change', (evt) =>{
    if (evt.target.tagName === 'SELECT') {
      checkType();
      validatePrice();
    }
  });

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


  adForm.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });

};

export {validateForm};
