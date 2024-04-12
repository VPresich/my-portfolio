import { portfolioMarkup } from './portfolio-markup.js';
import { portfolioData } from './portfolio-data.js';

export function portfolioCreate(galeryRef) {
  const portfolioListMarkup = portfolioMarkup(portfolioData);
  galeryRef.innerHTML = portfolioListMarkup;
}
