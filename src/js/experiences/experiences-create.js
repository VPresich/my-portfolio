import { experiencesMarkup } from './experiences-markup.js';
import { experiencesData } from './experiences-data.js';

export function experiencesCreate(galeryRef) {
  const experienceListMarkup = experiencesMarkup(experiencesData);
  galeryRef.innerHTML = experienceListMarkup;
}
