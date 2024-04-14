import {
  SELECTOR_GALLERY,
  CLASS_GALLERYSTART,
  CLASS_GITHUBLINK,
} from './portfolio-constants.js';

import { SELECTOR_BACKDROP } from '../modal-window/modal-window-constants.js';

import { openModalWindow } from '../modal-window/modal-window-handle.js';

import { portfolioModalCreate } from './portfolio-modal-create';
import { portfolioById } from './portfolio-byid';

let portfolioId;

const modalBackdrop = document.querySelector(SELECTOR_BACKDROP);

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
