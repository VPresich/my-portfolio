import{D as k,B as M,i as n,m as I,a as V,c as z,s as W}from"./assets/handle-menu-buttons-385926bd.js";import{i as N}from"./assets/vendor-32231325.js";const Y="Escape",O="modal-backdrop",J=".exercise-close-btn",Z=".exercises-gallery",X="gallery-start",w="is-open",Q=".exercise-favorite-btn",ee=".exercise-raiting-btn",te="Remove from",ae="Add to favorites",ie=".modal-rating";function ne(e={}){return`
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

      `}const _=(e,t)=>{const a=ne(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",a)};async function se(e){const t=new k(M);try{return await t.objectGetRequest(`exercises/${e}`)}catch(a){console.log("Error fetching exercise data:",a.message)}}function T(e,t){const a=t.childNodes[0];a.nodeValue=e}function re(e,t){const i=(JSON.parse(localStorage.getItem("favorites"))||[]).some(o=>o._id===e);T(i?te:ae,t)}const oe=(e,t)=>e<t?"#EEA10C":"#7E847F",ce=e=>{const t=parseInt(e.textContent);let a="";for(let i=0;i<5;i++)a+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${oe(i,t)}"
      >
        <use href="${n}#icon-star"></use>
      </svg>`;e.insertAdjacentHTML("beforeend",a)},le="exercises",ue=".rating-form-send-btn",de=".close-rating-form-btn",me=".stars-container",pe=".star-btn.rating-form-btn",ge=".rating-form-email-input",fe=".rating-form-comment",ve=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);function be(e={}){return`
  <div class="rating-form-container">
  <div class="rating-form-content">
  <button type="button" class="close-rating-form-btn rating-form-btn">
    <svg
      class="close-rating-form-icon"
      width="24"
      height="24"
      aria-label="close icon"
      stroke="rgba(27, 27, 27, 1)"
      fill="rgba(27, 27, 27, 1)"
    >
      <use href="${n}#icon-x"></use>
    </svg>
  </button>
  <div class="rating-stars-container">
    <p class="rating-label">Rating</p>
    <div class="stars-container">
     
    </div>
  </div>
  <form class="give-rating-form">
    <input
      type="email"
      class="rating-form-email-input"
      name="email-input"
      placeholder="Email"
    />
    <textarea
      name="comment"
      id="comment-textarea"
      class="rating-form-comment"
      placeholder="Your comment"
    ></textarea>
    <button class="rating-form-send-btn">Send</button>
  </form>
</div>
</div>
      `}const he=(e,t)=>{const a=be(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",a)};function Ee(e={}){const{exerciseRating:t}=e;return`
  
  <p class="rating-number">${t}.0</p>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="1"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${n}#icon-star" fill="${t>=1&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="2"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${n}#icon-star"  fill="${t>=2&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="3"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${n}#icon-star"  fill="${t>=3&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="4"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${n}#icon-star" fill="${t>=4&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="5"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${n}#icon-star" fill="${t>=5&&"#EEA10C"}"></use>
    </svg>
  </button>
      `}const B=(e,t)=>{const a=Ee(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",a)};async function Se(e){const t=new k(M);try{return await t.objectPatchRequest(le,e)}catch(a){throw a}}const ye="/my-portfolio/assets/bi-x-octagon-73f29380.svg",xe="/my-portfolio/assets/bi_check-45de7d45.svg";function c(e){N.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ye}`,iconColor:"#fafafb"})}function Ce(e){N.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${xe}`,iconColor:"#fafafb"})}let x,h,m,p,C,s=0,u,$=document.querySelector("."+O);function Re(e,t){e.preventDefault(),t&&(C=t,he({exerciseRating:s},$),x=document.querySelector(me),B({exerciseRating:s},x),Te())}function Te(){h=document.querySelector(ue),h&&h.addEventListener("click",Me),m=document.querySelector(ge),m&&m.addEventListener("input",Le),p=document.querySelector(fe),p&&p.addEventListener("input",ke);const e=document.querySelector(de);e&&e.addEventListener("click",P),D()}function Ae(e){s=e.getAttribute("data-starnumber"),B({exerciseRating:s},x),D()}function D(){const e=document.querySelectorAll(pe);e&&e.forEach(function(t){t.addEventListener("click",()=>{Ae(t)})})}function Le(e){m.textContent=e.target.value,u=e.target.value}function ke(e){p.textContent=e.target.value,e.target.value}function Me(e){if(e.preventDefault(),!s){c("Please select a rating");return}if(!u){c("Please enter a email");return}if(!ve(u)){c("please enter a valid email address");return}let t={id:C,rate:Number(s),email:u};Se(t).then(a=>{Ce("Success"),q(),P()}).catch(a=>{c("err: ",a.message)})}function P(e){q(),se(C).then(t=>{_(t,$),F()}).catch(t=>{c("err: ",t.message)})}function q(){s=0,u=""}let E,l,S,r,d=document.querySelector("."+O);d&&d.addEventListener("click",Ne);const A=document.querySelector(Z);A&&A.addEventListener("click",Ie);async function Ie(e){console.log("Modal"),e.preventDefault();const t=e.target;if(!t.classList.contains(X)||(t.nodeName!=="BUTTON"?r=t.closest("button").dataset.id:r=t.dataset.id,!r))return;_({},d),F()}function R(e){window.removeEventListener("keydown",U),d.classList.remove(w)}function F(){d.classList.add(w),window.addEventListener("keydown",U),E=document.querySelector(J),E&&E.addEventListener("click",R),l=document.querySelector(Q),l&&l.addEventListener("click",Oe),re(r,l);const e=document.querySelector(ie);ce(e),S=document.querySelector(ee),S&&S.addEventListener("click",we)}function U(e){e.code===Y&&R()}function Ne(e){e.currentTarget===e.target&&R()}function Oe(e){addOrRemoveFromFavorites(r,l)}function we(e){Re(e,r)}function _e(e){return e.map(t=>{const{title:a,company:i,period:o,duties:v}=t,b=v.map(K=>`<li class="duties-list-item">${K}</li>`).join("");return`
      <li class="experience-item">
        <div class="experience-info-container">
          <h3 class="experience-item-title">${a}</h3>
          <p class="experience-company">${i}</p>
          <p class="experience-period">${o}</p>
          <ul class="duties-list">${b}</ul>
        </div>
      </li>
    `}).join("")}const Be=[{title:"C++/Python Programmer, Data Analyst",company:"BIT-TEAM comp. | Ukraine, Kyiv",period:"January 2016 - up to now",duties:["Development and programming of algorithms for solving navigation problems","Researching algorithms in the MATLAB environment. Exploring algorithms with Python frameworks","Exploring algorithms with Python frameworks","Statistical analysis of large data"]},{title:"Senior researcher",company:"NTUU KPI, IPSA | Ukraine, Kyiv",period:"November 2005 - November 2015",duties:["Scientific research (Applied Mathematics, Numerical Methods of Nonlinear Optimization, Mathematical Modeling)","Programming (C++, MatLab)","Writing tutorials and research reports"]},{title:"Developer",company:"Software MacKiev comp. | Ukraine, Kyiv",period:"November 2001 - January 2007",duties:["Software development in Objective-C","GUI development in RealBasic","Porting software from Windows to macOS"]},{title:"Senior Lecturer, Associate Professor",company:"KNUTE | Ukraine, Kyiv",period:"September 1997 - October 2005",duties:["Lectures and practical classes on Algorithms, Programming Languages, Relational Databases and Information Technologies","Writing tutorials and tests for students"]},{title:"Researcher",company:"V.M. Glushkov IC (NAS of Ukraine) | Kyiv",period:"August 1988 - October 1996",duties:['Scientific research in the field of Nonlinear Optimization and Variational Inequalities. Dissertation: "Numerical Methods for Solving Variational Inequalities."',"Development of software packages for solving problems in Nonlinear Optimization and Variational Inequalities"]}];function G(e){const t=_e(Be);e.innerHTML=t}function $e(e){return e.map(({imgSrc:t,imgAlt:a,schoolName:i,speciality:o,degree:v,period:b})=>`
    <li class="education-item">
      <img
        class="education-img"
        src="${t}"
        alt="${a}"
        width="100"
        height="100"
      />
      <div class="education-info-container">
        <h3 class="education-item-title">${i}</h3>
        <h4 class="education-speciality">${o}</h4>
        <p class="education-degree">${v}</p>
        <p class="education-period">${b}</p>
      </div>
    </li>
  `).join("")}const De=[{imgSrc:"../img/goit.jpg",imgAlt:"goit",schoolName:"IT School GoIT",speciality:"Fullstack Developer",degree:"Fullstack Developer",period:"2023 - 2024"},{imgSrc:"../img/ic.jpg",imgAlt:"IC",schoolName:"Post-graduate, V.M. Glushkov Institute of Cybernetics of NAS of Ukraine, Kyiv",speciality:"Mathematical Modeling and Numerical Methods in Scientific Research",degree:"Ph.D. (Cand. of Phys. and Math. Sciences)",period:"1992 - 1996"},{imgSrc:"../img/mpti.jpg",imgAlt:"MPTI",schoolName:"Moscow Physics and Technology Institute (MPTI)",speciality:"Applied Mathematics",degree:"Master of Science in the Field of Applied Mathematics and Information Technology",period:"1982 - 1988"}];function Pe(e){const t=$e(De);e.innerHTML=t}const qe=".experience-js";let g=null;const L="filter-button-active",f=document.querySelector(qe),y=document.querySelector(".filters-buttons");y&&(g=y.firstElementChild,y.addEventListener("click",Fe));function Fe(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;switch(e.target.dataset.filter){case"Experience":G(f);break;case"Education":Pe(f);break;case"Certifications":console.log("Filter by Certifications");break;default:console.log("Unknown filter")}Ue(e.target)}function Ue(e){g&&g.classList.remove(L),e&&e.classList.add(L),g=e}f&&G(f);const j=document.querySelectorAll(".button-home"),H=document.querySelectorAll(".button-favorites");I(j,H);H.forEach(e=>{e.addEventListener("click",t=>{I([e],j)})});V();const Ge={iconURL:n,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},je=document.querySelector(".social-list");z(je,Ge,W);
//# sourceMappingURL=commonHelpers.js.map
