import { portfolioModalMarkup } from './portfolio-modal-markup';

export const portfolioModalCreate = (project, modalContainer) => {
  const strMarkup = portfolioModalMarkup(project);
  modalContainer.innerHTML = '';
  modalContainer.insertAdjacentHTML('beforeend', strMarkup);
};
