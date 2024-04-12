import { educationMarkup } from './education-markup.js';
import { educationData } from './education-data.js';

export function educationCreate(galeryRef) {
  const educationListMarkup = educationMarkup(educationData);
  galeryRef.innerHTML = educationListMarkup;
}
