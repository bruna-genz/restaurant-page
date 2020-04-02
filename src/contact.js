let contentWrapper;
let contactInfoWrapper;

export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

export const createContactInfo = () => {
    contactInfoWrapper = document.createElement("div");

    contactInfoWrapper.appendChild(createSeparator());
    contactInfoWrapper.appendChild(createTitle());
    contactInfoWrapper.appendChild(createImage());
    contactInfoWrapper.appendChild(createDetails());

    contentWrapper.appendChild(contactInfoWrapper);
};

const createSeparator = () => {
    return document.createElement("hr");  
}

const createTitle = () => {
    let title = document.createElement("h2");
    title.textContent = "Make your reservation today!";
    
    return title;
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
    contactInfoWrapper.remove();
}