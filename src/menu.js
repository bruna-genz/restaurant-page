let contentWrapper;
let menuWrapper;

import * as Common from './common';
import Pasta from './assets/images/pasta.jpg';
import Ratatouille from './assets/images/ratatouille_ed.jpg';
import Risotto from './assets/images/risotto.jpg';
export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

export const createMenu = () => {
    menuWrapper = document.createElement("div");

    menuWrapper.appendChild(Common.createSeparator());
    menuWrapper.appendChild(Common.createTitle("Lunch Menu"));
    menuWrapper.appendChild(createOptions());

    contentWrapper.appendChild(menuWrapper);
}

const createOptions = () => {
    let optionsWrapper = document.createElement("div");
    optionsWrapper.id = "options-container"

    let options = [
        {
            img: Pasta,
            title: "Caponata pasta",
            description: "Pasta Caponata is inspired by the Sicilian dish made with chopped eggplant, olives and tomatoes in a sweet and sour sauce. It's a light an easy meal that's vegan and gluten-free!"
        },
        {
            img: Risotto,
            title: "Seafood Risotto",
            description: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency."
        },
        {
            img: Ratatouille,
            title: "Ratatouille",
            description: "Ratatouille is a French Provençal stewed vegetable dish, originating in Nice, and sometimes referred to as ratatouille niçoise."
        }
    ]

    options.forEach((op) => {
        optionsWrapper.appendChild(createCard(op.img, op.title, op.description))
    });

    return optionsWrapper;
}

const createCard = (cardImg, optionName, description) => {
    let card = document.createElement("div");
    card.className = "card";

    let img = new Image();
    img.src = cardImg;
    img.className = "card-img-top";
    card.appendChild(img);
    
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = optionName;

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = description;

    cardBody.append(cardTitle, cardText);
    
    return card;
}

export const removeMenu = () => {
    if (menuWrapper != null) {
        menuWrapper.remove()
    }
};


