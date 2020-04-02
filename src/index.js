// !when click more than one time, it repeats


import './assets/styles/index.css';
import * as Home from "./home";
import * as Contact from "./contact";

Home.setContentWrapper(document.querySelector("#content"));

Home.loadHomePage();

Contact.setContentWrapper(document.querySelector("#content"));

let homeLink = document.querySelector(".list-0")
let menuLink = document.querySelector(".list-1")
let contactLink = document.querySelector(".list-2")

let buttons = [homeLink, menuLink, contactLink]

homeLink.addEventListener('click', () => {
    Home.createPresentation();
    Contact.removeContactInfo();
    activateButton(homeLink);
})

menuLink.addEventListener('click', () => {
    Home.removePresentation();
    Contact.removeContactInfo();
    activateButton(menuLink);
});

contactLink.addEventListener('click', () => {
    Home.removePresentation();
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