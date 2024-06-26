// const exercises = [
//   {
//     _id: '64f389465ae26083f39b17b3',
//     bodyPart: 'back',
//     equipment: 'barbell',
//     gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0022.gif',
//     name: 'barbell pullover to press',
//     target: 'lats',
//     description: 'These large back muscles are responsible for shoulder',
//     rating: 4.17,
//     burnedCalories: 33,
//     time: 3,
//     popularity: 168,
//   },
// ];

import iconURL from '../../img/icons/symbols.svg';

function modalWindowMarkup(filters = {}) {
  // const {
  //   _id,
  //   bodyPart,
  //   equipment,
  //   time,
  //   target,
  //   burnedCalories,
  //   gifUrl,
  //   name,
  //   filter,
  //   popularity,
  //   rating,
  //   description,
  // } = filters;

  return `
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="../../img/icons/symbols.svg#icon-x"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src='https://ftp.goit.study/img/power-pulse/gifs/0022.gif'
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">                
                <p class="modal-rating">'{rating}'</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">1</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">1</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">1</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">1</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">1 </p>
              </div>
              <p class="exercise-description">1</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="1"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="1">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `;
}

export default modalWindowMarkup;
