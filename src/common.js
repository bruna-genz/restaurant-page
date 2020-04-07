export const createSeparator = () => document.createElement('hr');

export const createTitle = (text) => {
  const title = document.createElement('h2');
  title.textContent = text;

  return title;
};

export const createParagraph = (text) => {
  const p = document.createElement('p');
  p.textContent = text;
  return p;
};