
const escKeydown  = (evt) => {
  if (evt.key === 'Escape'){
    removePopup();
  }
};

const onClick = () => {
  removePopup();
};

function removePopup  () {
  document.querySelector('.popup').remove();
  document.removeEventListener('click', onClick);
  document.removeEventListener('click', escKeydown);
}

const showPopup = (result) => {
  const messageTemplate = document.querySelector(`#${  result}`)
    .content.querySelector(`.${  result}`).cloneNode(true);
  document.body.append(messageTemplate);
  document.addEventListener('click', onClick);
  document.addEventListener('click', escKeydown);
};


const showErrorMessage = () => {
  showPopup('error');

};

const showSuccessMessage = () => {

  showPopup('success');

};


export {showErrorMessage, showSuccessMessage};
