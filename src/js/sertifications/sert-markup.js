import { getImageUrl } from '../common/get-img-url';
export function sertMarkup(items) {
  return items
    .map(
      ({ id, sertImgSrc, sertImgUrl, sertImgAlt, sertTitle, sertDate }) => `
    <li class="sert-item">
        <a calss = "sert-link" href="${sertImgUrl}" target="_blank" rel="noopener"> 
          <img
            class="sert-img"
            src="${sertImgSrc}"
            alt="${sertImgAlt}"
            data-id=${id},
            width="100"
            height="100"
          />       
            <div class="sert-info-container">       
              <p class="sert-date">${sertDate}</p>
            </div>
        </a>
    </li>
  `
    )
    .join('');
}

// <h3 class="sert-item-title">${sertTitle}</h3>;

// <img
//       class="sert-img"
//       src="${sertImgSrc}"
//       alt="${sertImgAlt}"
//       data-id=${id},
//       width="100"
//       height="100"
//     />
