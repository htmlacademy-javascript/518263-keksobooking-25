
const checkEscapeKey = (evt) => evt.key === 'Escape';

const isPressedEskKey  = () => {
  if (checkEscapeKey){
    removePopup();
  }
};

const onClickRemove = () => {

  removePopup();
};


function removePopup  () {
  const leafletPopup =  document.querySelector('.leaflet-popup');

  if (leafletPopup) {

    leafletPopup.remove();
  }

  if (document.querySelector('.popup')) {
    document.querySelector('.popup').remove();
  }
  document.removeEventListener('click', onClickRemove);
  document.removeEventListener('click', isPressedEskKey);
}

const showPopup = (result) => {
  const messageTemplate = document.querySelector(`#${  result}`)
    .content.querySelector(`.${  result}`).cloneNode(true);
  document.body.append(messageTemplate);
  document.addEventListener('click', onClickRemove);
  document.addEventListener('keydown', isPressedEskKey);
};


const showErrorMessage = () => {
  showPopup('error');

};

const showSuccessMessage = () => {

  showPopup('success');

};


export {showErrorMessage, showSuccessMessage, removePopup};
