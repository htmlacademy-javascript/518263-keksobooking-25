'use scrict';

const printInvalidValue = function(minValue, maxValue) {
  return `${minValue  } меньше нуля или больше ${  maxValue}`;
};

const getRamdomNumber = function(minNumber, maxNumber) {
  if (minNumber < 0 || minNumber >= maxNumber) {
    return printInvalidValue(minNumber, maxNumber);
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};


getRamdomNumber(0, 2);

const getFractionalRamdomNumber = function(minNumber, maxNumber, digit) {
  if (minNumber < 0 || minNumber >= maxNumber) {
    return printInvalidValue(minNumber, maxNumber);
  }
  return (Math.random() * (maxNumber - minNumber) + minNumber).toFixed(digit);
};


getFractionalRamdomNumber(4.1, 1.2, 10);
