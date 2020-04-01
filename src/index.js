import './assets/styles/index.css';
import { setContentWrapper, loadHomePage, renderPresentation, removePresentation } from "./home";

setContentWrapper(document.querySelector("#content"));

loadHomePage();

let homeLink = document.querySelector(".list-0")
let menuLink = document.querySelector(".list-1")
let contactLink = document.querySelector(".list-2")

homeLink.addEventListener('click', () => {
    renderPresentation();
    addActiveClass(homeLink);
    removeActiveClass(menuLink, contactLink);
})

menuLink.addEventListener('click', () => {
    removePresentation();
    addActiveClass(menuLink);
    removeActiveClass(homeLink, contactLink);
});

contactLink.addEventListener('click', () => {
    removePresentation();
    addActiveClass(contactLink);
    removeActiveClass(menuLink, homeLink);
});

function addActiveClass(el) {
    el.classList.add("active");
}

function removeActiveClass(...elements) {
    elements.forEach(el => el.classList.remove("active"));
}; 
