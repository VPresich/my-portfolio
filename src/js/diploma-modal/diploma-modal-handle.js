import { diplomaModalCreate } from './diploma-modal-create';
import { SELECTOR_GALLERY, CLASS_OPENMODAL } from './diploma-constants';

import { openModalWindow } from '../modal-window/modal-window-handle.js';

import { SELECTOR_BACKDROP } from '../modal-window/modal-window-constants.js';

const modalBackdrop = document.querySelector(SELECTOR_BACKDROP);
// modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

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
    const url = getGitHubUrl(targetRef);
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

// export function onCloseBtn(event) {
//   window.removeEventListener('keydown', onWindowKeydown);
//   modalBackdrop.classList.remove(MODAL_VISIBILITY);
// }

// export function openModalWindow() {
//   modalBackdrop.classList.add(MODAL_VISIBILITY);
//   window.addEventListener('keydown', onWindowKeydown);
//   closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
//   closeBtn && closeBtn.addEventListener('click', onCloseBtn);
// }

// function onWindowKeydown(event) {
//   if (event.code === KEY_CODE_ESC) {
//     onCloseBtn(event);
//   }
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onCloseBtn(event);
//   }
// }
