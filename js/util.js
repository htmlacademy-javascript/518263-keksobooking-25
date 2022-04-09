const getRandomPositiveInteger = (a, b) => {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomPositiveFloat =  (a, b, digits = 1) => {

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
};

const getRandomArray = (baseArray) => {
  const length = getRandomPositiveInteger(0, baseArray.length);
  const newArray = new Set ([]);
  for (let i = 0; i < length; i++) {
    const randomElement = getRandomPositiveInteger(0, baseArray.length - 1);
    newArray.add(baseArray[randomElement]);
  }
  return [...newArray];
};

const ALERT_SHOW_TIME = 5000;
const map = document.querySelector('.map');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = '90%';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'black';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;

  map.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArray, showAlert};
