import {
  SELECTOR_BACKDROP,
  MODAL_VISIBILITY,
  SELECTOR_CLOSEBTN,
  KEY_CODE_ESC,
} from './modal-window-constants';

let closeBtn;
const modalBackdrop = document.querySelector(SELECTOR_BACKDROP);
modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBtn(event);
  }
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
  console.log('Key');
  if (event.code === KEY_CODE_ESC) {
    onCloseBtn(event);
  }
}
