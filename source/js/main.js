// Переменные //
const links = document.querySelectorAll('.roundDate__link');

// Фильтрованный массив по месяцам //
const arrayOfNewsFilterMonth = [];
// Фильтрованный массив по годам //
const arrayOfNewsFilterYear = [];
// // Фильтрованный массив после объединения двух предыдущих массивов //
// const arrayOfNewsFiltered = [];
// Массив новостей //
const arrayOfNews = [
  {
    id: 0,
    day: 8,
    month: 8,
    year: 2023,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
  {
    id: 1,
    day: 7,
    month: 7,
    year: 2023,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
  {
    id: 2,
    day: 6,
    month: 6,
    year: 2023,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
  {
    id: 3,
    day: 5,
    month: 5,
    year: 2023,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
  {
    id: 4,
    day: 4,
    month: 4,
    year: 2023,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
  {
    id: 5,
    day: 3,
    month: 3,
    year: 2023,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
  {
    id: 6,
    day: 2,
    month: 2,
    year: 2019,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
];

// Блок кода для определения текущей странички сайта //
switch (window.location.href) {
  case 'http://localhost:3000/index.html':

    break;
  case 'http://localhost:3000/pressCentre.html':
    // Переменные //
    const filterMonth = document.querySelector('.press__filter-input-month');
    const filterYear = document.querySelector('.press__filter-input-year');
    const filterButton = document.querySelector('.press__filter-button');
    const pressContainer = document.querySelector('.press__content');
    const pressList = document.querySelector('.press__content-list');

    // Функция для создания каркаса для новостей //
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
    };
    // Функция для загрузки новостей в карскас //
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

    // Слушатели событий для фильтрации основного массива новостей для последующей его загрузки в новый массив arrayOfNewsFiltered //
    filterMonth.addEventListener('change', () => {
      arrayOfNews.filter((item) => {
        if (item.month === +filterMonth.options[filterMonth.selectedIndex].dataset.month) {
          arrayOfNewsFilterMonth.push(item);
          console.log(arrayOfNewsFilterMonth);
        };
      });
    });
    filterYear.addEventListener('change', () => {
      arrayOfNews.filter((item) => {
        if (item.year === +filterYear.options[filterYear.selectedIndex].dataset.year) {
          arrayOfNewsFilterYear.push(item);
          console.log(arrayOfNewsFilterYear);
        };
      });
    });

    // Удаление новостей //
    const getRemoveList = () => {
      pressContainer.removeChild(pressList);
    };

    // Помещение результатов фильтрации в один итоговый массив //
    const lodgeInArrayFiltredNews = () => {

    };

    // Функция для сортировки и удаления новостей с одинаковым id //
    const getDelelteIdenticalNewsInArray = () => {
      const arrayOfNewsFiltered = arrayOfNewsFilterYear.concat(arrayOfNewsFilterMonth);

    };
    getDelelteIdenticalNewsInArray();

    // Сортировка массива по возрастанию //
    const getSortArray = (arr) => {
      for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
          }
        }
      }
    };
    
    // Функция для вывода отфильтрованных новостей //
    const getFiltredNewsOnPage = () => {
      filterButton.addEventListener('click', () => {
        // getRemoveList();
        if (arrayOfNewsFilterMonth.length && arrayOfNewsFilterYear.length === 0) {
          console.log('00');
        } else if ( arrayOfNewsFilterMonth.length > 0 && arrayOfNewsFilterYear.length === 0 ) {
          console.log('10');
        } else if ( arrayOfNewsFilterMonth.length === 0 && arrayOfNewsFilterYear.length > 0 ) {
          console.log('01');
        } else if( arrayOfNewsFilterMonth.length > 0 && arrayOfNewsFilterYear.length > 0 ) {

          // arrayOfNewsFiltered.find((item) => {
          //   for (let i = 0; i < arrayOfNewsFiltered.length; i++) {
          //     // console.log(item.id);
          //     if(String(item.id) === String(arrayOfNewsFiltered.id)) {
          //       console.log(1);
          //     } else {
          //       console.log(2);
          //     }
          //   }
          // });
          console.log('11');
          console.log(arrayOfNewsFiltered);
        } else {
          console.log('error');
        }
      });
    };
    // getFiltredNewsOnPage();

    break;
  case 'http://localhost:3000/roundDate.html':
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
    break;
};
