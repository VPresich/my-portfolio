import{i as d,m as g,a as U,c as S,s as k,S as I,o as M}from"./assets/modal-window-handle-675d90e9.js";function L(e){return e.map(t=>{const{title:i,company:s,period:a,duties:o,isAwards:n,awards:p}=t,b=o.map(A=>`<li class="duties-list-item">${A}</li>`).join("");return`
      <li class="experience-item">
        <div class="experience-info-container">
          <h3 class="experience-item-title">${i}</h3>
          <p class="experience-company">${s}</p>
          <p class="experience-period">${a}</p>
          <ul class="duties-list">${b}</ul>
          <div>${C(t)}</div>
        </div>
      </li>
    `}).join("")}function C(e){let t="";const{isAwards:i,awards:s}=e;let a="";return console.log("isAwards",i),i&&(a=s.map(o=>`<li class="awards-list-item">
            <a class ="award-list-link diploma-js" href="${o.imgUrl}">
              <span class="award-icon-span diploma-js">
                <svg class="award-icon diploma-js" width="16" height="20" aria-label="award icon"} >
                  <use class="diploma-js" href="${d}#icon-award"></use> 
                </svg>
                ${o.title}
              </span>              
            </a>
          </li>`).join(""),t=`
    <p class = "awards-title">Awards:</p>
    <ul class="awards-list list">${a}</ul>`),t}const T="/my-portfolio/assets/prof-3aef5ea5.jpg",E="/my-portfolio/assets/diploma-knteu-5062b097.jpg",D=[{title:"C++/Python Programmer, Data Analyst",company:"BIT-TEAM comp. | Ukraine, Kyiv",period:"January 2016 - up to now",duties:["Development and programming of algorithms for solving navigation problems","Researching algorithms in the MATLAB environment. Exploring algorithms with Python frameworks","Exploring algorithms with Python frameworks","Statistical analysis of large data"],isAwards:!1},{title:"Senior researcher",company:"NTUU KPI, IPSA | Ukraine, Kyiv",period:"November 2005 - November 2015",duties:["Scientific research (Applied Mathematics, Numerical Methods of Nonlinear Optimization, Mathematical Modeling)","Programming (C++, MatLab)","Writing tutorials and research reports"],isAwards:!1},{title:"Developer",company:"Software MacKiev comp. | Ukraine, Kyiv",period:"November 2001 - January 2007",duties:["Software development in Objective-C","GUI development in RealBasic","Porting software from Windows to macOS"],isAwards:!1},{title:"Senior Lecturer, Associate Professor",company:"KNUTE | Ukraine, Kyiv",period:"September 1997 - October 2005",duties:["Lectures and practical classes on Algorithms, Programming Languages, Relational Databases and Information Technologies","Writing tutorials and tests for students"],isAwards:!0,awards:[{title:"Diploma of Associate Professor",imgUrl:T},{title:"Diploma",imgUrl:E}]},{title:"Scientific Researcher",company:"V.M. Glushkov IC (NAS of Ukraine) | Kyiv",period:"August 1988 - October 1996",duties:['Scientific research in the field of Nonlinear Optimization and Variational Inequalities. Dissertation: "Numerical Methods for Solving Variational Inequalities."',"Development of software packages for solving problems in Nonlinear Optimization and Variational Inequalities"],isAwards:!1}];function h(e){const t=L(D);e.innerHTML=t}function j(e){const t=window.location.href,i=new URL(t).origin,s=new URL(e,i).href;return console.log(s),s}function N(e){return e.map(({imgSrc:t,imgAlt:i,schoolName:s,speciality:a,degree:o,period:n,sertImgUrl:p})=>`
    <li class="education-item">
      <img
        class="education-img"
        src="${j(t)}"
        alt="${i}"
        width="100"
        height="100"
      />
      <div class="education-info-container">
        <h3 class="education-item-title">${s}</h3>
        <h4 class="education-speciality">${a}</h4>
          <a calss = "sert-link diploma-js" href="${p}" target="_blank" rel="noopener"> 
            <p class="education-degree diploma-js">${o}</p>
            <p class="education-period diploma-js">${n}</p>
        </a>
      </div>
    </li>
  `).join("")}const $="/my-portfolio/assets/goit-2a057e45.jpg",P="/my-portfolio/assets/ic-0ad4c2b9.jpg",R="/my-portfolio/assets/mpti-153757fb.jpg",O="/my-portfolio/assets/master-78c2f322.jpg",x="/my-portfolio/assets/phd-f3a6f675.jpg",B=[{imgSrc:$,imgAlt:"goit",schoolName:"IT School GoIT",speciality:"Fullstack Developer",degree:"Fullstack Developer",period:"2023 - 2024",sertImgUrl:""},{imgSrc:P,imgAlt:"IC",schoolName:"Post-graduate, V.M. Glushkov Institute of Cybernetics of NAS of Ukraine, Kyiv",speciality:"Mathematical Modeling and Numerical Methods in Scientific Research",degree:"Diploma: Ph.D. (Cand. of Phys. and Math. Sciences)",period:"1992 - 1996",sertImgUrl:x},{imgSrc:R,imgAlt:"MPTI",schoolName:"Moscow Physics and Technology Institute (MPTI)",speciality:"Applied Mathematics",degree:"Diploma: Master of Science in the Field of Applied Mathematics and Information Technology",period:"1982 - 1988",sertImgUrl:O}];function K(e){const t=N(B);e.innerHTML=t}function q(e){return e.map(({id:t,sertImgSrc:i,sertImgUrl:s,sertImgAlt:a,sertTitle:o,sertDate:n})=>`
    <li class="sert-item">
        <a calss = "sert-link" href="${s}" target="_blank" rel="noopener"> 
          <img
            class="sert-img"
            src="${i}"
            alt="${a}"
            data-id=${t},
            width="100"
            height="100"
          />       
            <div class="sert-info-container">       
              <p class="sert-date">${n}</p>
            </div>
        </a>
    </li>
  `).join("")}const _="/my-portfolio/assets/cisco-cybersecurity-d427ef46.png",m="/my-portfolio/assets/cisco-js1-2b9ae2af.png",G=[{id:1,sertImgSrc:_,sertImgUrl:"https://www.credly.com/badges/d6ea3773-467b-4918-9086-d4ab36940bec/public_url",sertImgAlt:"Introduction to Cybersecurity",sertTitle:"Introduction to Cybersecurity",sertDate:"Dec 2023"},{id:2,sertImgSrc:m,sertImgUrl:"https://www.credly.com/badges/1f678ba2-192e-4bcf-bd42-c3a974a8b3f6/public_url",sertImgAlt:"JavaScript Essentials 1",sertTitle:"JavaScript Essentials 1",sertDate:"Dec 2023"},{id:3,sertImgSrc:m,sertImgUrl:"https://www.credly.com/badges/1293d70e-ad5d-4860-81d7-0ff61d07a300/public_url",sertImgAlt:"Python Essentials 1",sertTitle:"Python Essentials 1",sertDate:"Dec 2023"}];function H(e){const t=q(G);e.innerHTML=t}const F=".experience-js",V="Certifications",J="Education",W="Experience";let l=null;const u="filter-button-active",r=document.querySelector(F),c=document.querySelector(".filters-buttons");c&&(l=c.firstElementChild,c.addEventListener("click",z));function z(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;switch(e.target.dataset.filter){case W:h(r);break;case J:K(r);break;case V:console.log("Filter by Certifications"),H(r);break;default:console.log("Unknown filter")}X(e.target)}function X(e){l&&l.classList.remove(u),e&&e.classList.add(u),l=e}r&&h(r);const y=document.querySelectorAll(".button-home"),w=document.querySelectorAll(".button-favorites");g(y,w);w.forEach(e=>{e.addEventListener("click",t=>{g([e],y)})});U();const Y={iconURL:d,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Q=document.querySelector(".social-list");S(Q,Y,k);function Z(e={}){const{imgUrl:t}=e;return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${d}#icon-x"></use>
              </svg>
            </button>
            <div class="portfolio-image-wrapper">
              <img
                src="${t}"
                alt="project title photo"
                class="portfolio-image-modal"
                width="700"
              />
            </div>           
          </div>
        </div>   

      `}const ee=(e,t)=>{const i=Z(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",i)},te=".container-filters",v="diploma-js",ie=document.querySelector(I),f=document.querySelector(te);f&&f.addEventListener("click",se);function se(e){e.preventDefault();const t=e.target;if(t.classList.contains(v)){const i=ae(t);i&&(ee({imgUrl:i},ie),M())}else{const i=getGitHubUrl(t);i&&window.open(i,"_blank","noreopen")}}function ae(e){let t,i;return e.classList.contains(v)&&(e.nodeName==="a"?i=e:i=e.closest("a")),i&&(t=i.getAttribute("href")),t}
//# sourceMappingURL=commonHelpers.js.map
