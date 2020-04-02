let contentWrapper;
let menuWrapper;

import * as Common from './common';
export const setContentWrapper = _contentWrapper => contentWrapper = _contentWrapper;

export const createMenu = () => {
    menuWrapper = document.createElement("div");

    menuWrapper.appendChild(Common.createSeparator());
    menuWrapper.appendChild(Common.createTitle("Lunch Menu"));

    contentWrapper.appendChild(menuWrapper);
}


