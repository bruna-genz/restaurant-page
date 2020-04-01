import './assets/styles/index.css';
import { setContentWrapper, loadHomePage, createPresentation, removePresentation } from "./home";

setContentWrapper(document.querySelector("#content"));

loadHomePage();

let homeLink = document.querySelector(".list-0")
let menuLink = document.querySelector(".list-1")
let contactLink = document.querySelector(".list-2")

let buttons = [homeLink, menuLink, contactLink]

homeLink.addEventListener('click', () => {
    createPresentation();
    activateButton(homeLink);
})

menuLink.addEventListener('click', () => {
    removePresentation();
    activateButton(menuLink);
});

contactLink.addEventListener('click', () => {
    removePresentation();
    activateButton(contactLink);
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