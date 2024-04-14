import { getImageUrl } from '../common/get-img-url';
export function educationMarkup(educationItems) {
  return educationItems
    .map(
      ({
        imgSrc,
        imgAlt,
        schoolName,
        speciality,
        degree,
        period,
        sertImgUrl,
      }) => `
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
          <a calss = "sert-link diploma-js" href="${sertImgUrl}" target="_blank" rel="noopener"> 
            <p class="education-degree diploma-js">${degree}</p>
            <p class="education-period diploma-js">${period}</p>
        </a>
      </div>
    </li>
  `
    )
    .join('');
}
