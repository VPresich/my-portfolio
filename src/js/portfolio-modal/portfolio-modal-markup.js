import iconURL from '../../img/icons/symbols.svg';
import { getImageUrl } from '../common/get-img-url';
export function portfolioModalMarkup(project = {}) {
  const {
    id,
    type,
    teamLeader,
    img,
    imgUrl,
    name,
    participants,
    languages,
    target,
    short,
    desc,
  } = project;

  return `
        <div class="portfolio-window">
          <div class="portfolio-container">
            <button class="portfolio-close-btn" type="button">
              <svg
                class="portfolio-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${iconURL}#icon-x"></use>
              </svg>
            </button>
            <div class="portfolio-image-wrapper">
              <img
                src="${imgUrl}"
                alt=""
                class="portfolio-image-modal"
              />
            </div>
            <div class="portfolio-info-wrapper">
              <div class="portfolio-name-container">                
                <p class="portfolio-name">${name}</p>
              </div>
              <div class="portfolio-params-container">
                <ul class="portfolio-params">
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Target</p>
                    <p class="portfolio-param-value exercise-param-target">${target}</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Role</p>
                    <p class="portfolio-param-value exercise-param-bodypart">${teamLeader}</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">FrameWork</p>
                    <p class="portfolio-param-value portfolio-param-equipment">Yes</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Team</p>
                    <p class="portfolio-param-value portfolio-param-popularuty">${participants}</p>
                  </li>
                </ul>
                <p class="portfolio-lang">Languages</p>
                <p class="portfolio-lang-value">${languages.join(',')}</p>
              </div>
              <p class="portfolio-description">${short}</p>              
            </div>
          </div>
        </div>   

      `;
}
