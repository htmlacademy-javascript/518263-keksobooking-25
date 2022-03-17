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

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArray};
