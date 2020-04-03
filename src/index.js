import './assets/styles/index.css';
import 'bootstrap';
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

homeLink.addEventListener('click', () => {
  cleanScreen();
  activateButton(homeLink);
  Home.createPresentation();
});

menuLink.addEventListener('click', () => {
  cleanScreen();
  activateButton(menuLink);
  Menu.createMenu();
});

contactLink.addEventListener('click', () => {
  cleanScreen();
  activateButton(contactLink);
  Contact.createContactInfo();
});