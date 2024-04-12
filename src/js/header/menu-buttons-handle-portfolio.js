import { makeActiveAndUsual } from './handle-menu-buttons';

const homeBtn = document.querySelectorAll('.button-home');
const portfolioBtn = document.querySelectorAll('.button-portfolio');

makeActiveAndUsual(portfolioBtn, homeBtn);

portfolioBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    makeActiveAndUsual([btn], homeBtn);
  });
});
