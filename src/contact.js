let contentWrapper;
let contactInfoWrapper;

import * as Common from './common';
export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

export const createContactInfo = () => {
    contactInfoWrapper = document.createElement("div");

    contactInfoWrapper.appendChild(Common.createSeparator());
    contactInfoWrapper.appendChild(Common.createTitle("Make your reservation today!"));
    contactInfoWrapper.appendChild(createImage());
    contactInfoWrapper.appendChild(createDetails());

    contentWrapper.appendChild(contactInfoWrapper);
};

const createImage = () => {
    const contactImage = document.createElement("div");
    contactImage.id = "contact-image";

    return contactImage;
};

const createDetails = () => {
    const detailsDiv = document.createElement("div");
    detailsDiv.id = "description";

    let paragraphList = []
    for (let i = 0; i < 3; i++) {
        let p = document.createElement("p")
        paragraphList.push(p);
        detailsDiv.appendChild(p);
    }

    paragraphList[0].textContent = "Tel: 905.497.3648"
    paragraphList[1].textContent = "Email: reservations@windsorsbristo.com"
    paragraphList[2].textContent = "496 Windsor St • Halifax, NS"

    return detailsDiv;
}

export const removeContactInfo = () => {
    if (contactInfoWrapper != null) {
        contactInfoWrapper.remove();
    }
}