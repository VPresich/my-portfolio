import { experiencesCreate } from './experiences-create.js';
import { educationCreate } from '../education/educattion-create.js';
import { LIST_CONTAINER } from './experiences-constants.js';

let activeBtn = null;
const activeBtnClass = 'filter-button-active';
const galleryRef = document.querySelector(LIST_CONTAINER);
const filtersRef = document.querySelector('.filters-buttons');
if (filtersRef) {
  activeBtn = filtersRef.firstElementChild;
  filtersRef.addEventListener('click', onFiltersBtnsClick);
}

function onFiltersBtnsClick(event) {
  event.preventDefault();
  if (event.target.tagName !== 'BUTTON') return;
  const filter = event.target.dataset.filter;
  switch (filter) {
    case 'Experience':
      experiencesCreate(galleryRef);
      break;
    case 'Education':
      educationCreate(galleryRef);
      break;
    case 'Certifications':
      // TODO
      console.log('Filter by Certifications');
      break;
    default:
      console.log('Unknown filter');
  }

  changeBtnActive(event.target);
}

function changeBtnActive(btn) {
  activeBtn && activeBtn.classList.remove(activeBtnClass);
  btn && btn.classList.add(activeBtnClass);
  activeBtn = btn;
}

galleryRef && experiencesCreate(galleryRef);
