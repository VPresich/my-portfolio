import { diplomaModalMarkup } from './diploma-modal-markup.js';

export const diplomaModalCreate = (diploma, modalContainer) => {
  const strMarkup = diplomaModalMarkup(diploma);
  modalContainer.innerHTML = '';
  modalContainer.insertAdjacentHTML('beforeend', strMarkup);
};
