let contentWrapper;
let contactInfoWrapper;

import restaurantImage from "./assets/images/restaurant2.jpg";

export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

export const createContactInfo = () => {
    contactInfoWrapper = document.createElement("div");

    contactInfoWrapper.appendChild(createTitle());
    contactInfoWrapper.appendChild(createImage());

    contentWrapper.appendChild(contactInfoWrapper);
};

const createTitle = () => {
    let title = document.createElement("h2");
    title.textContent = "Make your reservation today!";
    
    return title;
};

const createImage = () => {
    const contactImage = new Image();
    contactImage.src = restaurantImage;
    contactImage.id = "contact-image";

    return contactImage;
};

export const removeContactInfo = () => {
    contactInfoWrapper.remove();
}