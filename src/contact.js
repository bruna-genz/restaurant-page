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

  const paragraphs = [
    'Tel: 905.497.3648',
    'Email: reservations@windsorsbristo.com',
    '496 Windsor St • Halifax, NS',
  ];

  detailsDiv.append(...paragraphs.map(Common.createParagraph));

  return detailsDiv;
};

export const createContactInfo = () => {
  contactInfoWrapper = document.createElement('div');

  contactInfoWrapper.append(
    Common.createSeparator(),
    Common.createTitle('Make your reservation today!'),
    createImage(),
    createDetails(),
  );

  contentWrapper.appendChild(contactInfoWrapper);
};

export const removeContactInfo = () => {
  if (contactInfoWrapper != null) {
    contactInfoWrapper.remove();
  }
};