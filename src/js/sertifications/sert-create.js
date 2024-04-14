import { sertMarkup } from './sert-markup.js';
import { sertData } from './sert-data.js';

export function sertificationsCreate(galeryRef) {
  const strSertMarkup = sertMarkup(sertData);
  galeryRef.innerHTML = strSertMarkup;
}
