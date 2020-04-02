import * as Common from './common';
import Pasta from './assets/images/pasta.jpg';
import Ratatouille from './assets/images/ratatouille_ed.jpg';
import Risotto from './assets/images/risotto.jpg';
import Salmon from './assets/images/salmon.jpg';
import Ribs from './assets/images/ribs.jpg';
import Burger from './assets/images/burger.jpg';

let contentWrapper;
let menuWrapper;

let lunchOptions = [
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

let dinnerOptions = [
    {
        img: Salmon,
        title: "Roasted salmon",
        description: "Tender Garlic Butter Baked Salmon with crispy roast potatoes, asparagus and a delicious garlic butter sauce."
    },
    {
        img: Ribs,
        title: "Pork ribs",
        description: "Chef John's indoor baby back ribs are seasoned with a homemade dry rub, then glazed with barbeque sauce."
    },
    {
        img: Burger,
        title: "The Windsor's Burger",
        description: "Beef patty, cheddar, pork belly, mushroom stuffed onion ring, frites, served with a delicious aioli saude."
    }
];


export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

export const createMenu = () => {
    menuWrapper = document.createElement("div");

    menuWrapper.appendChild(Common.createSeparator());
    menuWrapper.appendChild(Common.createTitle("Lunch Menu"));
    menuWrapper.appendChild(createOptions(lunchOptions));
    menuWrapper.appendChild(Common.createTitle("Dinner Menu"));
    menuWrapper.appendChild(createOptions(dinnerOptions));

    contentWrapper.appendChild(menuWrapper);
}

const createOptions = (menu) => {
    let optionsWrapper = document.createElement("div");
    optionsWrapper.id = "options-container"

    menu.forEach((op) => {
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


