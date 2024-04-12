import iconURL from '../../img/icons/symbols.svg';
export function portfolioMarkup(portfolio) {
  return portfolio
    .map(
      project => `
    <li class="portfolio-card" data-id="${project.id}">
      <div class="portfolio-card-top-line">
        <div class="portfolio-card-top-left">
          <p class="portfolio-card-type portfolio-param">${project.type}</p>
          ${project.teamLeader}
        </div>
        <button type="submit" class="portfolio-details-btn gallery-start" data-id="${
          project.id
        }">
          Details
          <span class="arrow-icon-span gallery-start">
            <svg class="arrow-icon gallery-start" width="16" height="16" aria-label="arrow icon" stroke="black">
              <use href="${iconURL}#icon-arrow" class="gallery-start"></use>
            </svg>
          </span>
        </button>
      </div>

      <div class="portfolio-card-name-container">
        <a class="portfolio-github-icon-link gt-link-js" target="_blank" rel="noopener" href="${
          project.githubLink
        }">
          <svg class="github-icon gt-link-js" width="32" height="32" aria-label="github icon">
            <use class="gt-link-js" href="${iconURL}#github"></use>
          </svg>
        </a>
        <h3 class="portfolio-card-name">${project.name}</h3>
      </div>

      <div class="portfolio-card-details">
        <ul class="portfolio-card-details-list list">
          <li class="portfolio-card-details-item">
            <p class="portfolio-card-details-text portfolio-param">
              Participants:
              <span class="portfolio-card-text-part">${
                project.participants
              }</span>
            </p>
          </li>
          <li class="portfolio-card-details-item portfolio-param">
            <p class="portfolio-card-details-text">
              Languages:
              <span class="portfolio-card-text-part">${project.languages.join(
                ' '
              )}</span>
            </p>
          </li>
          <li class="portfolio-card-details-item portfolio-param">
            <p class="portfolio-card-details-text">
              Target:
              <span class="portfolio-card-text-part">${project.target}</span>
            </p>
          </li>
        </ul>
      </div>
    </li>
  `
    )
    .join('');
}
