let contentWrapper;
let logoElement;
let navbarElement;
let presentationElement;
let footerElement;

import restaurantImage from './assets/images/restaurant.jpg';

export const setContentWrapper = (_contentWrapper) => {
    contentWrapper = _contentWrapper;
};

export const loadHomePage = () => {
    logoElement = createLogo();
    contentWrapper.appendChild(logoElement); 

    navbarElement = createNavbar()
    contentWrapper.appendChild(navbarElement);

    renderPresentation();
    
    footerElement = createFooter();
    contentWrapper.insertAdjacentElement("afterend", footerElement);
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
        li.className = `list-${i}`;
        listItems.push(li);
        navList.appendChild(li);
    }

    listItems[0].textContent = "Home";
    listItems[0].classList.add("active");
    listItems[1].textContent = "Menu";
    listItems[2].textContent = "Contact";

    return navList;
};

const createPresentation = () => {
    let presentationWrapper = document.createElement("div");
    presentationWrapper.id = 'presentation';

    presentationWrapper.appendChild(createImage());
    presentationWrapper.appendChild(createParagraphs());

    return presentationWrapper;
} 

export const renderPresentation = () => {
    presentationElement = createPresentation();
    contentWrapper.appendChild(presentationElement);
}

export const removePresentation = () => {
    presentationElement.remove();
};

const createImage = () => {
    const menuImage = new Image();
    menuImage.src = restaurantImage;

    return menuImage;
}

const createParagraphs = () => {
    let paragraphWrapper = document.createElement("div");
    paragraphWrapper.id = "description";

    let paragraphList = []
    for (let i = 0; i < 2; i++) {
        let p = document.createElement("p")
        paragraphList.push(p);
        paragraphWrapper.appendChild(p);
    }

    paragraphList[0].textContent = "Ea amet sit ad nulla tempor pariatur esse minim nulla culpa qui incididunt nostrud. Lorem dolore cupidatat ut eiusmod. Sint velit exercitation incididunt et esse ad veniam sunt dolore."
    paragraphList[1].textContent = "Amet duis mollit non enim Lorem fugiat irure eiusmod nisi voluptate ut ad nisi. Pariatur reprehenderit ullamco et culpa pariatur quis exercitation dolor consequat laboris commodo dolor occaecat. Voluptate dolor voluptate esse dolore sunt labore eiusmod ipsum mollit minim commodo officia. Mollit enim deserunt nisi sit."

    return paragraphWrapper;
}

const createFooter = () => {
    let footer = document.createElement("footer");
    footer.textContent = '2020 Bruna Genz';

    let span = document.createElement("span");
    span.textContent = 'Photo by Petr Sevcovic on Unsplash';

    footer.appendChild(span);

    return footer;
}