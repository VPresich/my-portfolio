import { getImageUrl } from '../common/get-img-url';
export function educationMarkup(educationItems) {
  return educationItems
    .map(
      ({ imgSrc, imgAlt, schoolName, speciality, degree, period }) => `
    <li class="education-item">
      <img
        class="education-img"
        src="${getImageUrl(imgSrc)}"
        alt="${imgAlt}"
        width="100"
        height="100"
      />
      <div class="education-info-container">
        <h3 class="education-item-title">${schoolName}</h3>
        <h4 class="education-speciality">${speciality}</h4>
        <p class="education-degree">${degree}</p>
        <p class="education-period">${period}</p>
      </div>
    </li>
  `
    )
    .join('');
}
