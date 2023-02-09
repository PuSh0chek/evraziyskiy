"use strict";

// Переменные //
const links = document.querySelectorAll('.roundDate__link');
const arrayOfNewsFilterMonth = [];
const arrayOfNewsFilterYear = [];
const arrayOfNews = [{
  id: 0,
  day: 8,
  month: 8,
  year: 2023,
  content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала'
}, {
  id: 1,
  day: 7,
  month: 7,
  year: 2023,
  content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала'
}, {
  id: 2,
  day: 6,
  month: 6,
  year: 2023,
  content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала'
}, {
  id: 3,
  day: 5,
  month: 5,
  year: 2023,
  content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала'
}, {
  id: 4,
  day: 4,
  month: 4,
  year: 2023,
  content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала'
}, {
  id: 5,
  day: 3,
  month: 3,
  year: 2023,
  content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала'
}, {
  id: 6,
  day: 2,
  month: 2,
  year: 2019,
  content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала'
}];

switch (window.location.href) {
  case 'http://localhost:3000/index.html':
    break;

  case 'http://localhost:3000/pressCentre.html':
    const createNewsElement = () => {
      const pressContainer = document.querySelector('.press__content');
      const createNewsList = document.createElement('ul');
      const createNewsDateBlock = document.createElement('li');
      const createNewsDateELement = document.createElement('span');
      const createNewsContentBlock = document.createElement('li');
      const createNewsContentElement = document.createElement('span');
      pressContainer.appendChild(createNewsList);
      createNewsList.appendChild(createNewsDateBlock);
      createNewsList.appendChild(createNewsContentBlock);
      createNewsContentBlock.appendChild(createNewsContentElement);
      createNewsDateBlock.appendChild(createNewsDateELement);
      createNewsList.classList.add('press__content-list');
      createNewsDateBlock.classList.add('press__date-element-wrapper');
      createNewsDateELement.classList.add('press__date-element');
      createNewsContentBlock.classList.add('press__content-element-wrapper');
      createNewsContentElement.classList.add('press__content-element');
    };

    const loadNewsContentInElement = () => {
      for (let i = 0; i < arrayOfNews.length; i++) {
        createNewsElement();
        const createNewsDateELement = document.querySelectorAll('.press__date-element');
        const createNewsContentElement = document.querySelectorAll('.press__content-element');
        createNewsDateELement[i].innerHTML = arrayOfNews[i].day + '.' + arrayOfNews[i].month + '.' + arrayOfNews[i].year;
        createNewsContentElement[i].innerHTML = arrayOfNews[i].content;
      }
    };

    loadNewsContentInElement();

    const getListnerOfEvents = () => {
      const filterMonth = document.querySelector('.press__filter-input-month');
      const filterYear = document.querySelector('.press__filter-input-year');
      filterMonth.addEventListener('change', () => {
        arrayOfNews.filter(item => {
          if (item.month === +filterMonth.options[filterMonth.selectedIndex].dataset.month) {
            arrayOfNewsFilterMonth.push(item);
          }
        }); // if (filterMonth.value === 'январь') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 1));
        // } else if (filterMonth.value === 'февраль') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 2));
        // } else if (filterMonth.value === 'март') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 3));
        // } else if (filterMonth.value === 'апрель') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 4));
        // } else if (filterMonth.value === 'май') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 5));
        // } else if (filterMonth.value === 'июнь') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 6));
        // } else if (filterMonth.value === 'июль') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 7));
        // } else if (filterMonth.value === 'август') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 8));
        // } else if (filterMonth.value === 'сентябрь') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 9));
        // } else if (filterMonth.value === 'октябрь') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 10));
        // } else if (filterMonth.value === 'ноябрь') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 11));
        // } else if (filterMonth.value === 'декабрь') {
        //   arrayOfNewsFilterMonth.push(arrayOfNews.filter((item) => item.month === 12));
        // }
      });
      filterYear.addEventListener('change', () => {
        if (filterYear.value === 2019) {
          arrayOfNewsFilterYear.push(arrayOfNews.filter(item => item.year === 2023));
          console.log(arrayOfNewsFilterYear);
        }
      });
    };

    getListnerOfEvents();
    const filterInput = document.querySelector('.press__filter-input'); // filterInput.addEventListener('click', () => {
    //   const elementsOfArray = Array.from(filterInput.children);
    //   const contentsInElements = elementsOfArray.map((item) => item.innerHTML);
    //   const filterInputChild = document.querySelector('.press__element-filter-input');
    //   console.log(typeof filterInputChild.innerHTML);
    //   console.log(typeof elementsOfArray[1].value);
    //   for (let i = 0; i < elementsOfArray.length; i++) {
    //     if (elementsOfArray[1].value === 'январь') {
    //       console.log(1);
    //     };
    //   }
    // });

    break;

  case 'http://localhost:3000/roundDate.html':
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
    });
    break;
}