// Переменные //
const links = document.querySelectorAll('.roundDate__link');

// switch (window.location.href) {
//   case 'http://localhost:3000/index.html':

//     break;
//   case 'http://localhost:3000/pressCentre.html':


//     break;
//   case 'http://localhost:3000/roundDate.html':

//     break;
// };
const filterInput = document.querySelector('.press__filter-input');
console.log(document.querySelector('.press__filter-input').children[1]);

console.log(1);

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
