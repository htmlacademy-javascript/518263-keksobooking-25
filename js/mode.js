import { validateForm } from './form.js';

const form = document.querySelector('.ad-form');
const fieldSets = form.querySelectorAll('.ad-form__element');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersFields = Array.from(mapFilters.children);

const disableMode = () => {

  const disableActiveField = (field) => {
    field.setAttribute('disabled', 'disabled');
  };

  form.classList.add('ad-form--disabled');
  fieldSets.forEach((item) => {
    disableActiveField(item);
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFiltersFields.forEach((item) => {
    disableActiveField(item);
  });
};

const activeMode = () => {

  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  [...fieldSets, ...mapFiltersFields].forEach((item) => item.removeAttribute('disabled'));

  validateForm();

};

export {disableMode, activeMode};
