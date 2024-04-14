import { diplomaModalCreate } from './diploma-modal-create';
import { getHubUrl } from '../common/get-hubUrl.js';
import { SELECTOR_GALLERY, CLASS_OPENMODAL } from './diploma-constants';

import { openModalWindow } from '../modal-window/modal-window-handle.js';

import { SELECTOR_BACKDROP } from '../modal-window/modal-window-constants.js';

const modalBackdrop = document.querySelector(SELECTOR_BACKDROP);

const galleryRef = document.querySelector(SELECTOR_GALLERY);
galleryRef && galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const targetRef = event.target;
  if (targetRef.classList.contains(CLASS_OPENMODAL)) {
    const imgUrl = getDiplomaUrl(targetRef);
    if (imgUrl) {
      diplomaModalCreate({ imgUrl }, modalBackdrop);
      openModalWindow();
    }
  } else {
    const url = getHubUrl(targetRef);
    url && window.open(url, '_blank', 'noreopen');
  }
}

function getDiplomaUrl(targetRef) {
  let gitUrl;
  let anchorElement;
  if (targetRef.classList.contains(CLASS_OPENMODAL)) {
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
