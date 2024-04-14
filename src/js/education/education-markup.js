import { getImageUrl } from '../common/get-img-url';
import iconURL from '../../img/icons/symbols.svg';
export function educationMarkup(educationItems) {
  return educationItems
    .map(item => {
      const {
        imgSrc,
        imgAlt,
        schoolName,
        speciality,
        degree,
        period,
        sertImgUrl,
      } = item;
      return `
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
        <div>${getDegree(item)}</div>         
         <p class="education-period diploma-js">${period}</p>
      </div>
    </li>
  `;
    })
    .join('');
}

function getDegree(educationItem) {
  let strDegreeMarkup = '';
  const { isDiploma, degree, sertImgUrl } = educationItem;
  if (isDiploma) {
    strDegreeMarkup = `
    <a class ="sert-link diploma-js" href="${sertImgUrl}">
      <span class="sert-icon-span diploma-js">
        <svg class="sert-icon diploma-js" width="16" height="20" aria-label="award icon"} >
          <use class="diploma-js" href="${iconURL}#icon-award"></use> 
        </svg>
        ${degree}
      </span>              
    </a>`;
  }
  return strDegreeMarkup;
}

//  <a
//    calss="sert-link diploma-js"
//    href="${sertImgUrl}"
//    target="_blank"
//    rel="noopener"
//  >
//    <p class="education-degree diploma-js">${degree}</p>
//    <p class="education-period diploma-js">${period}</p>
//  </a>;
