import {
  SELECTOR_GALLERY,
  CLASS_GALLERYSTART,
  SELECTOR_CLOSEBTN,
  KEY_CODE_ESC,
  SELECTOR_BACKDROP,
  MODAL_VISIBILITY,
  CLASS_GITHUBLINK,
} from './portfolio-constants.js';

import { portfolioModalCreate } from './portfolio-modal-create';
import { portfolioById } from './portfolio-byid';

let closeBtn;
let portfolioId;

let modalBackdrop = document.querySelector(SELECTOR_BACKDROP);
modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

const galleryRef = document.querySelector(SELECTOR_GALLERY);
galleryRef && galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const targetRef = event.target;
  if (targetRef.classList.contains(CLASS_GALLERYSTART)) {
    if (targetRef.nodeName !== 'BUTTON') {
      let closestBtn = targetRef.closest('BUTTON');
      portfolioId = closestBtn.dataset.id;
    } else portfolioId = targetRef.dataset.id;
    if (!portfolioId) return;
    const formData = portfolioById(portfolioId);
    portfolioModalCreate(formData, modalBackdrop);
    openModalWindow();
  } else {
    const url = getGitHubUrl(targetRef);
    url && window.open(url, '_blank', 'noreopen');
  }
}

function getGitHubUrl(targetRef) {
  let gitUrl;
  let anchorElement;
  if (targetRef.classList.contains(CLASS_GITHUBLINK)) {
    if (targetRef.nodeName === 'a') {
      anchorElement = targetRef;
    } else {
      anchorElement = targetRef.closest('a');
    }
  }

  if (anchorElement) {
    gitUrl = anchorElement.getAttribute('href');
  }
  return gitUrl;
}

export function onCloseBtn(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove(MODAL_VISIBILITY);
}

export function openModalWindow() {
  modalBackdrop.classList.add(MODAL_VISIBILITY);
  window.addEventListener('keydown', onWindowKeydown);
  closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
  closeBtn && closeBtn.addEventListener('click', onCloseBtn);
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseBtn(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBtn(event);
  }
}
