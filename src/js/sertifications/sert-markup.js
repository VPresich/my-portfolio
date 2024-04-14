import { getImageUrl } from '../common/get-img-url';
export function sertMarkup(items) {
  return items
    .map(
      ({ id, sertImgSrc, sertImgUrl, sertImgAlt, sertTitle, sertDate }) => `
    <li class="sert-item">
        <a calss = "sert-link gt-link-js" href="${sertImgUrl}" target="_blank" rel="noopener"> 
         <div class="sert-img-inner gt-link-js">
          <img
            class="sert-img gt-link-js"
            src="${sertImgSrc}"
            alt="${sertImgAlt}"
            data-id=${id},
            width="100"
            height="100"
          />   
            <div class="sert-img-darkened gt-link-js"></div>  
           </div>
            <div class="sert-info-container">       
              <p class="sert-date">${sertDate}</p>
            </div>
        </a>
    </li>
  `
    )
    .join('');
}

{
  /* <div class="card-cover-inner">
  <img class="card-cover" src="${previewURL}" alt="${tags}" />
  <div class="card-cover-darkened"></div>
</div>; */
}
