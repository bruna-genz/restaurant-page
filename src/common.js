export const createSeparator = () => {
    return document.createElement("hr");  
}

export const createTitle = (text) => {
    let title = document.createElement("h2");
    title.textContent = text;
    
    return title;
}