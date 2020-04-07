/* eslint-disable import/no-extraneous-dependencies */
import './assets/styles/index.css';
// eslint-disable-next-line import/no-unresolved
import 'bootstrap';
// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Home from './home';
import * as Contact from './contact';
import * as Menu from './menu';

Home.setContentWrapper(document.querySelector('#content'));

Home.loadHomePage();

Menu.setContentWrapper(document.querySelector('#content'));
Contact.setContentWrapper(document.querySelector('#content'));

const homeLink = document.querySelector('.list-0');
const menuLink = document.querySelector('.list-1');
const contactLink = document.querySelector('.list-2');

const buttons = [homeLink, menuLink, contactLink];

function cleanScreen() {
  Home.removePresentation();
  Contact.removeContactInfo();
  Menu.removeMenu();
}

function addActiveClass(el) {
  el.classList.add('active');
}

function removeActiveClass(...elements) {
  elements.forEach(el => el.classList.remove('active'));
}

function activateButton(button) {
  buttons.forEach(b => {
    if (b === button) {
      addActiveClass(b);
    } else {
      removeActiveClass(b);
    }
  });
}

document.querySelector('#tabs').addEventListener('click', (e) => {
  if (!e.target.matches('li')) {
    return;
  }

  cleanScreen();
  activateButton(e.target);

  const menuOptions = {
    Home: Home.createPresentation,
    Menu: Menu.createMenu,
    Contact: Contact.createContactInfo,
  };

  menuOptions[e.target.textContent](); // Maybe using some data attributes on the li elements could make this more easy/reliable: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
});
