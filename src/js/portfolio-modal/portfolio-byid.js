import { portfolioData } from '../portfolio/portfolio-data';

export function portfolioById(id) {
  return portfolioData.find(item => item.id == id);
}
