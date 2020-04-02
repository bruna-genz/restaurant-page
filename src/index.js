import './assets/styles/index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Home from "./home";
import * as Contact from "./contact";
import * as Menu from "./menu";

Home.setContentWrapper(document.querySelector("#content"));

Home.loadHomePage();

Menu.setContentWrapper(document.querySelector("#content"));
Contact.setContentWrapper(document.querySelector("#content"));

let homeLink = document.querySelector(".list-0")
let menuLink = document.querySelector(".list-1")
let contactLink = document.querySelector(".list-2")

let buttons = [homeLink, menuLink, contactLink]

homeLink.addEventListener('click', () => {
    Home.removePresentation();
    Contact.removeContactInfo();
    Menu.removeMenu();
    activateButton(homeLink);
    Home.createPresentation();
})

menuLink.addEventListener('click', () => {
    Home.removePresentation();
    Contact.removeContactInfo();
    Menu.removeMenu();
    activateButton(menuLink);
    Menu.createMenu();
});

contactLink.addEventListener('click', () => {
    Home.removePresentation();
    Contact.removeContactInfo();
    Menu.removeMenu();
    activateButton(contactLink);
    Contact.createContactInfo();
});

function addActiveClass(el) {
    el.classList.add("active");
}

function removeActiveClass(...elements) {
    elements.forEach(el => el.classList.remove("active"));
}; 

function activateButton(button) {
    buttons.forEach(b => {
        if (b === button) {
            addActiveClass(b)
        } else {
            removeActiveClass(b)
        }
    })
}