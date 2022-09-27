const links = document.querySelectorAll('.roundDate__link');

links.forEach((element) => {
  element.addEventListener('click', (evt) => {
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
});


//////////////////////////////////////////////////////////////
//////  press center
//////////////////////////////////////////////////////////////
const content = document.querySelector('.press__content-list');
const buttonFilter = document.querySelector('.press__filter-button');
const parentList = document.querySelector('.press__content-list');
// const filterManth = document.querySelector('.press__filter-input');
// const filterYear = document.querySelector('.press__filter-input');
const obj = {
  first: {
    day: 15,
    manth: 12,
    year: 2015,
    info: 'Генерального директора АО «Евразийский» Вишневского Германа Александровича с Новым годом и Рождеством',
  },
};

const createObj = (day, manth, year, info) => {
  const date = document.createElement('p');
  const contentInLi = document.createElement('p');
  const li = document.createElement('li');
  date.textContent = obj.first.day + '.' + obj.first.manth + '.' + obj.first.manth;
  contentInLi.textContent = ': ' + obj.first.info;
  li.appendChild(date);
  li.appendChild(contentInLi);
  parentList.appendChild(li);
  console.log(li);
};

buttonFilter.addEventListener('click', () => {
  createObj();
  console.log(1);
});
