export const createSeparator = () => document.createElement('hr');

export const createTitle = (text) => {
  const title = document.createElement('h2');
  title.textContent = text;

  return title;
};