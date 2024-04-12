export function experiencesMarkup(experiencesData) {
  return experiencesData
    .map(experience => {
      const { title, company, period, duties } = experience;
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
        </div>
      </li>
    `;
    })
    .join('');
}
