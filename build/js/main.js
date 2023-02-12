"use strict";

// Переменные //
const links = document.querySelectorAll('.roundDate__link'); // Фильтрованный массив по месяцам //

const arrayOfNewsFilterMonth = []; // Фильтрованный массив по годам //

const arrayOfNewsFilterYear = []; // // Фильтрованный массив после объединения двух предыдущих массивов //
// const arrayOfNewsFiltered = [];
// Массив новостей //

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
}]; // Блок кода для определения текущей странички сайта //

switch (window.location.href) {
  case 'http://localhost:3000/index.html':
    break;

  case 'http://localhost:3000/pressCentre.html':
    // Переменные //
    const filterMonth = document.querySelector('.press__filter-input-month');
    const filterYear = document.querySelector('.press__filter-input-year');
    const filterButton = document.querySelector('.press__filter-button');
    const pressContainer = document.querySelector('.press__content');
    const pressList = document.querySelectorAll('.press__content-list'); // Функция для создания каркаса для новостей //

    const createNewsElement = () => {
      const pressContainerContent = document.querySelector('.press__content');
      const createNewsList = document.createElement('ul');
      const createNewsDateBlock = document.createElement('li');
      const createNewsDateELement = document.createElement('span');
      const createNewsContentBlock = document.createElement('li');
      const createNewsContentElement = document.createElement('span');
      pressContainerContent.appendChild(createNewsList);
      createNewsList.appendChild(createNewsDateBlock);
      createNewsList.appendChild(createNewsContentBlock);
      createNewsContentBlock.appendChild(createNewsContentElement);
      createNewsDateBlock.appendChild(createNewsDateELement);
      createNewsList.classList.add('press__content-list');
      createNewsDateBlock.classList.add('press__date-element-wrapper');
      createNewsDateELement.classList.add('press__date-element');
      createNewsContentBlock.classList.add('press__content-element-wrapper');
      createNewsContentElement.classList.add('press__content-element');
    }; // Функция для загрузки новостей в карскас //


    const loadNewsContentInElement = () => {
      for (let i = 0; i < arrayOfNews.length; i++) {
        createNewsElement();
        const createNewsDateELement = document.querySelectorAll('.press__date-element');
        const createNewsContentElement = document.querySelectorAll('.press__content-element');
        createNewsDateELement[i].innerHTML = arrayOfNews[i].day + '.' + arrayOfNews[i].month + '.' + arrayOfNews[i].year;
        createNewsContentElement[i].innerHTML = arrayOfNews[i].content;
      }
    };

    loadNewsContentInElement(); // Слушатели событий для фильтрации основного массива новостей для последующей его загрузки в новый массив arrayOfNewsFiltered //

    filterMonth.addEventListener('change', () => {
      arrayOfNews.filter(item => {
        if (item.month === +filterMonth.options[filterMonth.selectedIndex].dataset.month) {
          arrayOfNewsFilterMonth.push(item);
          console.log(arrayOfNewsFilterMonth);
        }
      });
    });
    filterYear.addEventListener('change', () => {
      arrayOfNews.filter(item => {
        if (item.year === +filterYear.options[filterYear.selectedIndex].dataset.year) {
          arrayOfNewsFilterYear.push(item);
          console.log(arrayOfNewsFilterYear);
        }
      });
    }); // Удаление новостей //

    const getRemoveList = () => {
      pressContainer.innerHTML = '';
    }; // Помещение результатов фильтрации в один итоговый массив //
    // Функция для сортировки и удаления новостей с одинаковым id //


    const getDelelteIdenticalNewsInArray = (arrayFirst, arrayTwo) => {
      let arrayOfNewsFiltered;
      filterButton.addEventListener('click', () => {
        console.log(typeof filterYear.value);
        console.log(typeof String('-'));
        getRemoveList(); // объединение сортированных массивов //

        arrayOfNewsFiltered = arrayFirst.concat(arrayTwo); // функция для проверки массива и удаления при не прохождения условий отбова новостей //

        const getDeletedNewsOfArray = () => {
          for (let i = 0; i < arrayOfNewsFiltered.length; i++) {
            if (arrayOfNewsFiltered[i].month !== String(filterMonth.value) && arrayOfNewsFiltered[i].year !== String(filterYear.value)) {
              if (arrayOfNewsFiltered[i].month === '-' && arrayOfNewsFiltered[i].year !== String(filterYear.value)) {
                arrayOfNewsFiltered.shift([i]);
                arrayOfNewsFiltered.filter((item, index, self) => index === self.indexOf(item));
                console.log('Месяц не выбран, а год выбран');
              } else if (arrayOfNewsFiltered[i].month === String(filterMonth.value) && arrayOfNewsFiltered[i].year === '-') {
                console.log('Месяц выбран, а год не выбран');
                arrayOfNewsFiltered.filter((item, index, self) => index === self.indexOf(item));
              } else if (arrayOfNewsFiltered[i].month === '-' && arrayOfNewsFiltered[i].year === '-') {
                // arrayOfNewsFiltered.shift([i]);
                loadNewsContentInElement();
                arrayOfNewsFiltered.filter((item, index, self) => index === self.indexOf(item));
                console.log('Месяц не выбран, а год не выбран');
              }
            } else {
              console.log('error');
            }

            console.log(filterMonth.value, 'Выбранный месяц');
            console.log(filterYear.value, 'Выбранный год');
            console.log(arrayOfNewsFilterMonth, 'Массив по месяцам');
            console.log(arrayOfNewsFilterYear, 'Массив по годам');
            console.log(arrayOfNewsFiltered, 'Готовый массив');
            console.log(arrayOfNewsFiltered.filter((item, index, self) => index === self.indexOf(item)), 'Готовый массив фильтрованный');
          }
        };

        getDeletedNewsOfArray(); // Сортировка массива по возрастанию id //
        // const getSortArray = (arr) => {
        // const sortArray = () => {
        // for (let i = 0; i < arrayOfNewsFiltered.length; i++) {
        // arrayOfNewsFiltered[i].id;
        // };
        // };
        // arrayOfNewsFiltered.sort(sortArray());
        // console.log(arrayOfNewsFiltered);
        // };
        // getSortArray();
      });
    };

    getDelelteIdenticalNewsInArray(arrayOfNewsFilterYear, arrayOfNewsFilterMonth); // Функция для вывода отфильтрованных новостей //
    // getFiltredNewsOnPage();

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