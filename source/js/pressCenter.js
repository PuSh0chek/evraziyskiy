import array from './dateNews.js';

const list = document.querySelector('.press__content-list');
const buttonFilter = document.querySelector('.press__filter-button');

const makeElement = (tag, classTag, content = '') => {
  const element = document.createElement(tag);
  element.classList.add(classTag);
  element.textContent = content;
  return element;
};

const createPopup = (item) => {
  const li = makeElement('li', 'popup__item', '');
  const date = makeElement('time', 'popup__item-date', item.createDate());
  const title = makeElement('h3', 'popup__item-title', item.title);
  list.appendChild(li);
  li.append(date);
  li.append(title);
};

array.forEach((item) => {
  createPopup(item);
});

buttonFilter.addEventListener('click', () => {
  createObj();
});
