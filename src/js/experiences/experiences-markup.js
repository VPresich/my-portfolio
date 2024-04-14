import iconURL from '../../img/icons/symbols.svg';

export function experiencesMarkup(experiencesData) {
  return experiencesData
    .map(experience => {
      const { title, company, period, duties, isAwards, awards } = experience;
      const dutiesList = duties
        .map(duty => `<li class="duties-list-item">${duty}</li>`)
        .join('');

      return `
      <li class="experience-item">
        <div class="experience-info-container">
          <h3 class="experience-item-title">${title}</h3>
          <p class="experience-company">${company}</p>
          <p class="experience-period">${period}</p>
          <ul class="duties-list">${dutiesList}</ul>
          <div>${getAwards(experience)}</div>
        </div>
      </li>
    `;
    })
    .join('');
}

function getAwards(experience) {
  let strAwardsMarkup = '';
  const { isAwards, awards } = experience;
  let awardsList = '';
  if (isAwards) {
    awardsList = awards
      .map(
        award =>
          `<li class="awards-list-item">
            <a class ="award-list-link diploma-js" href="${award.imgUrl}">
              <span class="award-icon-span diploma-js">
                <svg class="award-icon diploma-js" width="16" height="20" aria-label="award icon"} >
                  <use class="diploma-js" href="${iconURL}#icon-award"></use> 
                </svg>
                ${award.title}
              </span>              
            </a>
          </li>`
      )
      .join('');
    strAwardsMarkup = `
    <p class = "awards-title">Awards:</p>
    <ul class="awards-list list">${awardsList}</ul>`;
  }

  return strAwardsMarkup;
}
