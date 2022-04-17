const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMAGE_SIZE = 70;


const adForm = document.querySelector('.ad-form');
const avatarFileChooser = adForm.querySelector('#avatar');
const previewAvatarContainer = adForm.querySelector('.ad-form-header__preview');

const defaultAvatarBackground = previewAvatarContainer.querySelector('img') ;
const defaultAvatarPadding = previewAvatarContainer.style.padding;

const createImage = (src) => {
  const img = document.createElement('img');
  img.src = src;
  img.width = IMAGE_SIZE;
  img.height = IMAGE_SIZE;
  img.style.objectFit = 'contain';
  return img;
};

const getAvatarPreview = () => {

  avatarFileChooser.addEventListener('change', () => {
    const file = avatarFileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewAvatarContainer.removeChild(previewAvatarContainer.children[0]);
      previewAvatarContainer.style.padding = 0;
      previewAvatarContainer.append(createImage(URL.createObjectURL(file)));
    }
  });
};

const housePhotosChooser = adForm.querySelector('#images');
const housePhotosContainer = adForm.querySelector('.ad-form__photo');

const getHousePhotosPreview = () => {

  housePhotosChooser.addEventListener('change', () => {
    const file = housePhotosChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      if (housePhotosContainer.children.length > 0) {
        housePhotosContainer.removeChild(housePhotosContainer.children[0]);
      }
      housePhotosContainer.style.padding = 0;
      housePhotosContainer.append(createImage(URL.createObjectURL(file)));
    }
  });
};

const resetPhotosreview = () => {

  previewAvatarContainer.removeChild(previewAvatarContainer.children[0]);
  previewAvatarContainer.append(defaultAvatarBackground);
  previewAvatarContainer.style.padding = defaultAvatarPadding;
  if (housePhotosContainer.children.length > 0) {
    housePhotosContainer.removeChild(housePhotosContainer.children[0]);
  }
};

export {getAvatarPreview, getHousePhotosPreview, resetPhotosreview};
