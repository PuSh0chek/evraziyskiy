"use strict";

const links = document.querySelectorAll('.roundDate__link');
links.forEach(element => {
  element.addEventListener('click', evt => {
    evt.preventDefault();
    const parent = element.parentElement;
    const parent2 = parent.parentElement;
    const parent3 = parent2.parentElement;
    const popup = parent3.querySelector('.roundDate__popup');
    popup.classList.remove('roundDate__popup-hidden');
    const button = popup.querySelector('.roundDate__button');
    button.addEventListener('click', () => {
      popup.classList.add('roundDate__popup-hidden');
    });
  });
}); //////////////////////////////////////////////////////////////
//////  press center
//////////////////////////////////////////////////////////////

const list = document.querySelector('.press__content-list');
const buttonFilter = document.querySelector('.press__filter-button');
const parentList = document.querySelector('.press__content-list'); // const filterManth = document.querySelector('.press__filter-input');
// const filterYear = document.querySelector('.press__filter-input');

console.log(list);
const arrayOfPopups = [{
  day: 24,
  month: 24,
  year: 2022,
  title: 'Генерального директора АО «Евразийский» Вишневского Германа Александровича с Новым годом и Рождеством',

  createDate() {
    return `${this.day}.${this.month}.${this.year}`;
  }

}, {
  day: 12,
  month: 8,
  year: 2012,
  title: 'asdasГенерального директора АО «Евразийский» Вишневского Германа Александровича с Новым годом и Рождеством',

  createDate() {
    return `${this.day}.${this.month}.${this.year}`;
  }

}];
console.log(arrayOfPopups[0].day);

const makeElement = function (tag, classTag) {
  let content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const element = document.createElement(tag);
  element.classList.add(classTag);
  element.textContent = content;
  return element;
};

const createPopup = item => {
  const li = makeElement('li', 'popup__item', '');
  const date = makeElement('time', 'popup__item-date', item.createDate());
  const title = makeElement('h3', 'popup__item-title', item.title);
  list.appendChild(li);
  li.append(date);
  li.append(title);
};

arrayOfPopups.forEach(item => {
  createPopup(item);
});
buttonFilter.addEventListener('click', () => {
  createObj();
  console.log(1);
});