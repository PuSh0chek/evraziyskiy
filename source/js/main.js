// Переменные //
const links = document.querySelectorAll('.roundDate__link');

// Массив объектов для рассылки //
const arrayOfMailing = {};

// Фильтрованный массив по месяцам //
const arrayOfNewsFilterMonth = [];

// Фильтрованный массив по годам //
const arrayOfNewsFilterYear = [];
// // Фильтрованный массив после объединения двух предыдущих массивов //
let arrayOfNewsFiltered = [];

// Массив контента для новостей //
const arrayOfContentNews = [
  {
    id: 0,
    day: 3,
    month: 2,
    year: 2023,
    title: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
    content: 'Как руководитель и гражданин, которому не безразлична судьба градообразующего предприятия, поставщика важнейшего ресурса, считаю необходимым сделать официальное заявление для общественности и СМИ. Представитель «Альфа-Групп» - компания «Росводоканал» - продолжает предпринимать попытки рейдерского захвата Ростовского Водоканала. Использует при этом запрещённые законом методы и коррупционные связи. У меня на руках есть все доказательства сказанных выше слов. В ближайшее время я готовлю для обнародования сенсационную информацию о коррупционной деятельности господина Фрадкина А.В.',
    contentLow: 'Генеральный директор АО "Евразийский" Герман Вишневский',
    img: '/',
  },
];

// Массив новостей //
const arrayOfNews = [
  {
    id: 0,
    day: 3,
    month: 2,
    year: 2023,
    content: 'Заявление Генерального директора АО «Евразийский» Германа Вишневского о попытках рейдерского захвата Ростовводоканала',
  },
];

// Блок кода для определения текущей странички сайта //
switch (window.location.href) {
  case 'http://localhost:3000/index.html' :

    // Создание требуемых элементов для новости на странице //
    const getCreateNews = () => {
      const newsList = document.querySelector('.main__news-list');
      const createElementOfNews = document.createElement('li');
      const createTitleOfNews = document.createElement('h3');
      const createContentOfNews = document.createElement('p');
      const createContentLowerOfNews = document.createElement('p');
      const createImgOfNews = document.createElement('img');
      createElementOfNews.classList.add('main__element-news-list');
      createTitleOfNews.classList.add('main__title-of-element');
      createContentOfNews.classList.add('main__content-of-element');
      createContentLowerOfNews.classList.add('main__content-lower-of-element');
      createImgOfNews.classList.add('main__img-of-element');
      newsList.appendChild(createElementOfNews);
      createElementOfNews.appendChild(createTitleOfNews);
      createElementOfNews.appendChild(createContentOfNews);
      createElementOfNews.appendChild(createContentLowerOfNews);
      createElementOfNews.appendChild(createImgOfNews);
    };

    // Обращение к массиву и его обрезание //
    const getTreatmentArray = () => {
      if (arrayOfContentNews.length < 4) {
        arrayOfContentNews.slice(arrayOfContentNews.length - 4, arrayOfContentNews.length - 1);
      }
    };

    // Загрузка контента //
    const getContent = (array) => {
      getTreatmentArray();
      for(let i = 0; i < array.length; i++) {
        getCreateNews();
        const dateOfNews = document.querySelector('.main__date-of-element');
        const titleOfNews = document.querySelectorAll('.main__title-of-element');
        const contentOfNews = document.querySelectorAll('.main__content-of-element');
        const contentLowerOfNews = document.querySelectorAll('.main__content-lower-of-element');
        const imgOfNews = document.querySelectorAll('.main__img-of-element');
        titleOfNews[i].innerHTML = array[i].title;
        contentOfNews[i].innerHTML = array[i].content;
        contentLowerOfNews[i].innerHTML = array[i].contentLow;
        imgOfNews[i].innerHTML = array[i].img;
      };
    };
    getContent(arrayOfContentNews);

    // Анимация для рассылки новостей //
    gsap.fromTo('.main__popup-of-mailing', {
      x:-500,
      opacity: 0,
    }, {
      x:0,
      duration: 3,
      opacity: 1,
    });

    // Функция скрывающая popup с предложением о подписке  //
    const getHidePopupOfMailing = () => {
      const mailingPopup = document.querySelector('.main__popup-of-mailing');
      mailingPopup.style = 'display: none';
    };

    // Слушатель события mailing popup //
    const buttonMailingCloseOfPopup = document.querySelector('.main__button-close-popup-of-mailing');
    buttonMailingCloseOfPopup.addEventListener('click', () => {
      getHidePopupOfMailing();
    });

    break;

  case 'http://localhost:3000/pressCentre.html':

    // Переменные //
    const filterMonth = document.querySelector('.press__filter-input-month');
    const filterYear = document.querySelector('.press__filter-input-year');
    const filterButton = document.querySelector('.press__filter-button');
    const pressContainer = document.querySelector('.press__content');

    // ФУНКЦИИ ДЛЯ РАБОТЫ С НОВОСТЯМИ //
    // Функция для создания каркаса для списка новостей //
    const createNewsElement = () => {
      const pressContainerContent = document.querySelector('.press__content');
      const createContainerElement = document.createElement('li');
      const createNewsList = document.createElement('ul');
      const createNewsDateBlock = document.createElement('li');
      const createNewsDateELement = document.createElement('span');
      const createNewsContentBlock = document.createElement('li');
      const createNewsContentElement = document.createElement('h4');
      const createNewsIdElement = document.createElement('span');
      pressContainerContent.appendChild(createContainerElement);
      createContainerElement.appendChild(createNewsList);
      createNewsList.appendChild(createNewsIdElement);
      createNewsList.appendChild(createNewsDateBlock);
      createNewsList.appendChild(createNewsContentBlock);
      createNewsContentBlock.appendChild(createNewsContentElement);
      createNewsDateBlock.appendChild(createNewsDateELement);
      createContainerElement.classList.add('press__element');
      createNewsList.classList.add('press__content-list');
      createNewsDateBlock.classList.add('press__date-element-wrapper');
      createNewsDateELement.classList.add('press__date-element');
      createNewsContentBlock.classList.add('press__content-element-wrapper');
      createNewsContentElement.classList.add('press__content-element');
      createNewsIdElement.classList.add('press__content-element-id');
    };

    // Функция для загрузки новостей в список //
    const loadNewsContentInElement = (array) => {
      for (let i = 0; i < array.length; i++) {
        createNewsElement();
        const createNewsDateELement = document.querySelectorAll('.press__date-element');
        const createNewsContentElement = document.querySelectorAll('.press__content-element');
        const newsIdElement = document.querySelectorAll('.press__content-element-id');
        createNewsDateELement[i].innerHTML = array[i].day + '.' + array[i].month + '.' + array[i].year;
        createNewsContentElement[i].innerHTML = array[i].content;
        newsIdElement[i].innerHTML = array[i].id;
      }
    };
    loadNewsContentInElement(arrayOfNews);

    // Слушатели событий для фильтрации основного массива новостей и для последующей его загрузки в новый массив arrayOfNewsFiltered //
    filterMonth.addEventListener('change', () => {
      arrayOfNews.filter((item) => {
        if (item.month === +filterMonth.options[filterMonth.selectedIndex].dataset.month) {
          arrayOfNewsFilterMonth.push(item);
        };
      });
    });

    filterYear.addEventListener('change', () => {
      arrayOfNews.filter((item) => {
        if (item.year === +filterYear.options[filterYear.selectedIndex].dataset.year) {
          arrayOfNewsFilterYear.push(item);
        };
      });
    });

    // Удаление новостей //
    const getRemoveList = () => {
      pressContainer.innerHTML = '';
    };

    // Вывод надписи 'Новостей не обнаружено' при пустом масииве //
    const getNotFoundElement = () => {
      const elementNotFound = document.createElement('h2');
      elementNotFound.classList.add('press__element-not-found');
      pressContainer.appendChild(elementNotFound);
      elementNotFound.textContent = 'Ничего не найдено';
    };

    // ФУНКЦИИ ДЛЯ РАБОТЫ С POPUP //
    const getPopup = () => {

      // // Очистка popup //
      const getRemoveContentInPopup = () => {
        const popup = document.querySelector('.press__popup');
        popup.innerHTML = '';
      };

      // // Закрыть popup //
      const getHiddenPopup = () => {
        const buttonClose = document.querySelector('.press__button-close-popup');
        buttonClose.addEventListener('click', () => {
          const popup = document.querySelector('.press__popup');
          popup.classList.add('press__popup-hidden');
          const elementOfListNews = document.querySelector('.press__content');
          elementOfListNews.style = 'display: block';
          getRemoveContentInPopup();
        });
      };

      // Функция для создания popup //
      const createPopupForNews = () => {
        const containerWithPopup = document.querySelector('.press__content-wrapper');
        const popup = document.querySelector('.press__popup');
        const date = document.createElement('span');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const contentLow = document.createElement('p');
        const image = document.createElement('img');
        const buttonClose = document.createElement('button');
        popup.classList.add('press__popup-hidden');
        date.classList.add('press__date-popup');
        title.classList.add('press__title-popup');
        content.classList.add('press__content-popup');
        contentLow.classList.add('press__content-low-popup');
        image.classList.add('press__image-popup');
        buttonClose.classList.add('press__button-close-popup');
        containerWithPopup.appendChild(popup);
        popup.appendChild(title);
        popup.appendChild(content);
        popup.appendChild(contentLow);
        popup.appendChild(image);
        popup.appendChild(date);
        popup.appendChild(buttonClose);
        buttonClose.textContent = 'Закрыть';
        getHiddenPopup();
      };

      // Слушатель события для вывода POPUP //
      Array.from(pressContainer.children).forEach((element) => {
        element.addEventListener('click', () => {
          const childrenElement = element.children[0];
          const elementOfListNews = document.querySelector('.press__content');
          elementOfListNews.style = 'display: none';
          createPopupForNews();

          // Загрузка контента из требуемого объекта в popup //
          for(let i = 0; i < arrayOfContentNews.length; i++) {
            if (+arrayOfContentNews[i].id === +childrenElement.children[0].textContent) {
              const date = document.querySelector('.press__date-popup');
              const title = document.querySelector('.press__title-popup');
              const content = document.querySelector('.press__content-popup');
              const contentLow = document.querySelector('.press__content-low-popup');
              const image = document.querySelector('.press__image-popup');
              date.innerHTML= arrayOfContentNews[i].day + '.' + arrayOfContentNews[i].month + '.' + arrayOfContentNews[i].year;
              title.innerHTML = arrayOfContentNews[i].title;
              content.innerHTML = arrayOfContentNews[i].content;
              contentLow.innerHTML = arrayOfContentNews[i].contentLow;
              image.href = arrayOfContentNews[i].img;
            };
          };
        });
      });
    };
    getPopup();

    // Функция для сортировки и вывода новостей //
    const getSortAndDeleteNewsOfArray = (arrayFirst, arrayTwo) => {
      filterButton.addEventListener('click', () => {
        getRemoveList();

        // Проверка массива и удаления при не прохождения условий отбова новостей //
        // Объединение сортированных массивов //
        arrayOfNewsFiltered = [...arrayFirst, ...arrayTwo];
        if (filterMonth.value !== '-' && filterYear.value !== '-') {
          arrayOfNewsFiltered = arrayOfNewsFiltered.filter((item) => item.month === +filterMonth.options[filterMonth.selectedIndex].dataset.month);
          arrayOfNewsFiltered = arrayOfNewsFiltered.filter((item) => item.year === +filterYear.options[filterYear.selectedIndex].dataset.year);
        }

        // Удаление одинаковых элементов массива //
        arrayOfNewsFiltered = arrayOfNewsFiltered.filter((item, index, self) => index === self.indexOf(item));
        arrayOfNewsFiltered.length !== 0 ? loadNewsContentInElement(arrayOfNewsFiltered) : getNotFoundElement();
        getPopup();
      });
    };
    getSortAndDeleteNewsOfArray(arrayOfNewsFilterYear, arrayOfNewsFilterMonth);


    break;

  case 'http://localhost:3000/roundDate.html':
    // Вывод popup //
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

  case 'http://localhost:3000/mailing.html':
    const buttonSignOfMailing = document.querySelector('.main__button-mailing');
    const inputSignOfMailing = document.querySelectorAll('.main__mailing-input');
    const countElmentOfName = 3;
    

    // слушатель события на добавление в массив элемента //
    buttonSignOfMailing.addEventListener('click', () =>   {

    });
};
