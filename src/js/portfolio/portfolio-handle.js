import { portfolioCreate } from './portfolio-create.js';
import { SELECTOR_GALLERY } from '../portfolio-modal/portfolio-constants.js';

const galleryPortfolioRef = document.querySelector(SELECTOR_GALLERY);
galleryPortfolioRef && portfolioCreate(galleryPortfolioRef);
