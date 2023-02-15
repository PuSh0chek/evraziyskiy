"use strict";

// Переменные //
const links = document.querySelectorAll('.roundDate__link'); // Фильтрованный массив по месяцам //

const arrayOfNewsFilterMonth = []; // Фильтрованный массив по годам //

const arrayOfNewsFilterYear = []; // // Фильтрованный массив после объединения двух предыдущих массивов //

let arrayOfNewsFiltered = []; // Массив новостей //

const arrayOfNews = [{
  id: 0,
  day: 3,
  month: 2,
  year: 2023,
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
    const pressList = document.querySelectorAll('.press__content-list'); // ФУНКЦИИ ДЛЯ РАБОТЫ С НОВОСТЯМИ //
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
      createNewsList.appendChild(createNewsDateBlock);
      createNewsList.appendChild(createNewsContentBlock);
      createNewsContentBlock.appendChild(createNewsContentElement);
      createNewsDateBlock.appendChild(createNewsDateELement);
      createNewsDateBlock.appendChild(createNewsIdElement);
      createNewsList.classList.add('press__content-list');
      createNewsDateBlock.classList.add('press__date-element-wrapper');
      createNewsDateELement.classList.add('press__date-element');
      createNewsContentBlock.classList.add('press__content-element-wrapper');
      createNewsContentElement.classList.add('press__content-element');
      createNewsIdElement.classList.add('press__content-element-id');
    }; // Функция для загрузки новостей в список //


    const loadNewsContentInElement = array => {
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

    loadNewsContentInElement(arrayOfNews); // Слушатели событий для фильтрации основного массива новостей и для последующей его загрузки в новый массив arrayOfNewsFiltered //

    filterMonth.addEventListener('change', () => {
      arrayOfNews.filter(item => {
        if (item.month === +filterMonth.options[filterMonth.selectedIndex].dataset.month) {
          arrayOfNewsFilterMonth.push(item);
        }
      });
    });
    filterYear.addEventListener('change', () => {
      arrayOfNews.filter(item => {
        if (item.year === +filterYear.options[filterYear.selectedIndex].dataset.year) {
          arrayOfNewsFilterYear.push(item);
        }
      });
    }); // Удаление новостей //

    const getRemoveList = () => {
      pressContainer.innerHTML = '';
    }; // Вывод надписи 'Новостей не обнаружено' при пустом масииве //


    const getNotFoundElement = () => {
      const elementNotFound = document.createElement('h2');
      elementNotFound.classList.add('press__element-not-found');
      pressContainer.appendChild(elementNotFound);
      pressContainer.textContent = 'Ничего не найдено';
    }; // Функция для сортировки и вывода новостей //


    const getSortAndDeleteNewsOfArray = (arrayFirst, arrayTwo) => {
      filterButton.addEventListener('click', () => {
        getRemoveList(); // Проверка массива и удаления при не прохождения условий отбова новостей //
        // Объединение сортированных массивов //

        arrayOfNewsFiltered = [...arrayFirst, ...arrayTwo];

        if (filterMonth.value !== '-' && filterYear.value !== '-') {
          arrayOfNewsFiltered = arrayOfNewsFiltered.filter(item => item.month === +filterMonth.options[filterMonth.selectedIndex].dataset.month);
          arrayOfNewsFiltered = arrayOfNewsFiltered.filter(item => item.year === +filterYear.options[filterYear.selectedIndex].dataset.year);
        } // Удаление одинаковых элементов массива //


        arrayOfNewsFiltered = arrayOfNewsFiltered.filter((item, index, self) => index === self.indexOf(item));
        arrayOfNewsFiltered.length !== 0 ? loadNewsContentInElement(arrayOfNewsFiltered) : getNotFoundElement();
      });
    };

    getSortAndDeleteNewsOfArray(arrayOfNewsFilterYear, arrayOfNewsFilterMonth); // ФУНКЦИИ ДЛЯ РАБОТЫ С POPUP //

    const getPopup = () => {
      // Функция для создания popup //
      const createPopupForNews = () => {
        const containerWithPopup = document.querySelector('.press__content-wrapper');
        const popup = document.createElement('div');
        const date = document.createElement('span');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const contentLow = document.createElement('p');
        const image = document.createElement('img');
        const buttonClose = document.createElement('button');
        popup.classList.add('press__popup');
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
      }; // Загрузка контента из требуемого объекта в popup //


      const getLoadContentInPopup = array => {
        createPopupForNews();

        for (let i = 0; i < array.length; i++) {
          const date = document.querySelector(press__date - popup);
          const title = document.querySelector(press__title - popup);
          const content = document.querySelector(press__content - popup);
          const image = document.querySelector(press__image - popup);
          const contentLow = document.querySelector();
          date[i].innerHTML = array[i].day + '.' + array[i].month + '.' + array[i].year;
          title[i].innerHTML = array[i].title;
          content[i].innerHTML = array[i].content;
          contentLow[i].innerHTML = array[i].contentLow;
          image[i].href = array[i].image;
        } // Очистка popup //

      }; // Вывод popup //


      const getPopupVisability = () => {
        const popup = document.querySelector('.press__popup');
        popup.classList.remove('press__popup-hidden');
        getLoadContentInPopup();
      }; // Слушатель события для вывода POPUP //


      Array.from(pressContainer.children).forEach(element => {
        element.addEventListener('click', item => {
          getPopupVisability();
        });
      });
    };

    getPopup();
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