/* eslint-disable no-return-assign */
import restaurantImage from './assets/images/restaurant.jpg';
import * as Common from './common';

let contentWrapper;
let presentationWrapper;

export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

const createLogo = () => {
  const logoHeading = document.createElement('h1');
  logoHeading.textContent = "The Windsor's Bistro";
  contentWrapper.appendChild(logoHeading);
};

const createNavbar = () => {
  const navList = document.createElement('ul');
  navList.id = 'tabs';

  const listItems = [];

  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.className = `list-${i}`;
    listItems.push(li);
    navList.appendChild(li);
  }

  listItems[0].textContent = 'Home';
  listItems[0].classList.add('active');
  listItems[1].textContent = 'Menu';
  listItems[2].textContent = 'Contact';

  contentWrapper.appendChild(navList);
};

const createImage = () => {
  const menuImage = new Image();
  menuImage.src = restaurantImage;

  return menuImage;
};

const createParagraphs = () => {
  const paragraphWrapper = document.createElement('div');
  paragraphWrapper.id = 'description';

  const paragraphs = [
    'Ea amet sit ad nulla tempor pariatur esse minim nulla culpa qui incididunt nostrud. Lorem dolore cupidatat ut eiusmod. Sint velit exercitation incididunt et esse ad veniam sunt dolore.',
    'Amet duis mollit non enim Lorem fugiat irure eiusmod nisi voluptate ut ad nisi. Pariatur reprehenderit ullamco et culpa pariatur quis exercitation dolor consequat laboris commodo dolor occaecat. Voluptate dolor voluptate esse dolore sunt labore eiusmod ipsum mollit minim commodo officia. Mollit enim deserunt nisi sit.',
  ];

  paragraphWrapper.append(...paragraphs.map(Common.createParagraph));
  return paragraphWrapper;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.textContent = '2020 Bruna Genz';

  const span = document.createElement('span');
  span.textContent = 'Photo by Petr Sevcovic on Unsplash';

  footer.appendChild(span);

  contentWrapper.insertAdjacentElement('afterend', footer);
};

export const createPresentation = () => {
  presentationWrapper = document.createElement('div');
  presentationWrapper.id = 'presentation';

  presentationWrapper.append(
    createImage(),
    createParagraphs(),
  );

  contentWrapper.appendChild(presentationWrapper);
};

export const loadHomePage = () => {
  createLogo();
  createNavbar();
  createPresentation();
  createFooter();
};

export const removePresentation = () => {
  if (removePresentation) {
    presentationWrapper.remove();
  }
};