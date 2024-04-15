import iconURL from '../../img/icons/symbols.svg';
export function diplomaModalMarkup(diploma = {}) {
  const { imgUrl } = diploma;
  return `
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${iconURL}#icon-x"></use>
              </svg>
            </button>           
              <img
                src="${imgUrl}"
                alt="project title photo"
                class="diploma-image-modal"
                width="900"
              />                    
          </div>
        </div>   

      `;
}
