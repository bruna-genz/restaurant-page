/* eslint-disable no-return-assign */
import * as Common from './common';

let contentWrapper;
let contactInfoWrapper;
export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

const createImage = () => {
  const contactImage = document.createElement('div');
  contactImage.id = 'contact-image';

  return contactImage;
};

const createDetails = () => {
  const detailsDiv = document.createElement('div');
  detailsDiv.id = 'description';

  const paragraphList = [];
  for (let i = 0; i < 3; i += 1) {
    const p = document.createElement('p');
    paragraphList.push(p);
    detailsDiv.appendChild(p);
  }

  paragraphList[0].textContent = 'Tel: 905.497.3648';
  paragraphList[1].textContent = 'Email: reservations@windsorsbristo.com';
  paragraphList[2].textContent = '496 Windsor St • Halifax, NS';

  return detailsDiv;
};

export const createContactInfo = () => {
  contactInfoWrapper = document.createElement('div');

  contactInfoWrapper.appendChild(Common.createSeparator());
  contactInfoWrapper.appendChild(Common.createTitle('Make your reservation today!'));
  contactInfoWrapper.appendChild(createImage());
  contactInfoWrapper.appendChild(createDetails());

  contentWrapper.appendChild(contactInfoWrapper);
};

export const removeContactInfo = () => {
  if (contactInfoWrapper != null) {
    contactInfoWrapper.remove();
  }
};