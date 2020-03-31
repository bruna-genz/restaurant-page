let contentWrapper
let logoElement
let navbarElement

export const setContentWrapper = (_contentWrapper) => {
    contentWrapper = _contentWrapper;
};

export const loadHomePage = () => {
    logoElement = createLogo();
    contentWrapper.appendChild(logoElement); 

    navbarElement = createNavbar()
    contentWrapper.appendChild(navbarElement);

};

const createLogo = () => {
    let logoHeading = document.createElement("h1");
    logoHeading.textContent = "The Windsor's Bistro";
    return logoHeading;
};

const createNavbar = () => {
    let navList = document.createElement("ul");
    navList.id = 'tabs';

    let listItems = [];

    for (let i = 0; i < 3; i++) {
        let li = document.createElement("li");
        listItems.push(li);
        navList.appendChild(li);
    }

    listItems[0].textContent = "Home";
    listItems[0].classList.add = "active";
    listItems[1].textContent = "Menu";
    listItems[2].textContent = "Contact";

    return navList;
};

export const removeLogo = () => {
    logoElement.remove();
};

