
const checkEscapeKey = (evt) => evt.key === 'Escape';

const isPressedEskKey  = () => {
  if (checkEscapeKey){
    removePopup();
  }
};

const onClick = () => {

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
  document.removeEventListener('click', onClick);
  document.removeEventListener('click', isPressedEskKey);
}

const showPopup = (result) => {
  const messageTemplate = document.querySelector(`#${  result}`)
    .content.querySelector(`.${  result}`).cloneNode(true);
  document.body.append(messageTemplate);
  document.addEventListener('click', onClick);
  document.addEventListener('click', isPressedEskKey);
};


const showErrorMessage = () => {
  showPopup('error');

};

const showSuccessMessage = () => {

  showPopup('success');

};


export {showErrorMessage, showSuccessMessage, removePopup};
