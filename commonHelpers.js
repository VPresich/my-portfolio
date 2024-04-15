import{i as l,m as h,a as k,c as I,s as S,S as U,g as M,o as L}from"./assets/modal-window-handle-7197231a.js";function C(e){return e.map(t=>{const{title:i,company:s,period:a,duties:o,isAwards:c,awards:m}=t,p=o.map(A=>`<li class="duties-list-item">${A}</li>`).join("");return`
      <li class="experience-item">
        <div class="experience-info-container">
          <h3 class="experience-item-title">${i}</h3>
          <p class="experience-company">${s}</p>
          <p class="experience-period">${a}</p>
          <ul class="duties-list">${p}</ul>
          <div>${j(t)}</div>
        </div>
      </li>
    `}).join("")}function j(e){let t="";const{isAwards:i,awards:s}=e;let a="";return i&&(a=s.map(o=>`<li class="awards-list-item">
            <a class ="award-list-link diploma-js" href="${o.imgUrl}">
              <span class="award-icon-span diploma-js">
                <svg class="award-icon diploma-js" width="16" height="20" aria-label="award icon"} >
                  <use class="diploma-js" href="${l}#icon-award"></use> 
                </svg>
                ${o.title}
              </span>              
            </a>
          </li>`).join(""),t=`
    <p class = "awards-title">Awards:</p>
    <ul class="awards-list list">${a}</ul>`),t}const D="/my-portfolio/assets/prof-0ef99a5a.jpg",T=[{title:"C++/Python Programmer, Data Analyst",company:"BIT-TEAM comp. | Ukraine, Kyiv",period:"January 2016 - up to now",duties:["Development and programming of algorithms for solving navigation problems","Researching algorithms in the MATLAB environment. Exploring algorithms with Python frameworks","Exploring algorithms with Python frameworks","Statistical analysis of large data"],isAwards:!1},{title:"Senior researcher",company:"NTUU KPI, IPSA | Ukraine, Kyiv",period:"November 2005 - November 2015",duties:["Scientific research (Applied Mathematics, Numerical Methods of Nonlinear Optimization, Mathematical Modeling)","Programming (C++, MatLab)","Writing tutorials and research reports"],isAwards:!1},{title:"Developer",company:"Software MacKiev comp. | Ukraine, Kyiv",period:"November 2001 - January 2007",duties:["Software development in Objective-C","GUI development in RealBasic","Porting software from Windows to macOS"],isAwards:!1},{title:"Senior Lecturer, Associate Professor",company:"KNUTE | Ukraine, Kyiv",period:"September 1997 - October 2005",duties:["Lectures and practical classes on Algorithms, Programming Languages, Relational Databases and Information Technologies","Writing tutorials and tests for students"],isAwards:!0,awards:[{title:"Diploma of Associate Professor",imgUrl:D}]},{title:"Scientific Researcher",company:"V.M. Glushkov IC (NAS of Ukraine) | Kyiv",period:"August 1988 - October 1996",duties:['Scientific research in the field of Nonlinear Optimization and Variational Inequalities. Dissertation: "Numerical Methods for Solving Variational Inequalities."',"Development of software packages for solving problems in Nonlinear Optimization and Variational Inequalities"],isAwards:!1}];function y(e){const t=C(T);e.innerHTML=t}function E(e){const t=window.location.href,i=new URL(t).origin,s=new URL(e,i).href;return console.log(s),s}function N(e){return e.map(t=>{const{imgSrc:i,imgAlt:s,schoolName:a,speciality:o,degree:c,period:m,sertImgUrl:p}=t;return`
    <li class="education-item">
      <img
        class="education-img"
        src="${E(i)}"
        alt="${s}"
        width="100"
        height="100"
      />
      <div class="education-info-container">
        <h3 class="education-item-title">${a}</h3>
        <h4 class="education-speciality">${o}</h4>
        <div>${$(t)}</div>         
         <p class="education-period diploma-js">${m}</p>
      </div>
    </li>
  `}).join("")}function $(e){let t="";const{isDiploma:i,degree:s,sertImgUrl:a}=e;return i&&(t=`
    <a class ="sert-link diploma-js" href="${a}">
      <span class="sert-icon-span diploma-js">
        <svg class="sert-icon diploma-js" width="16" height="20" aria-label="award icon"} >
          <use class="diploma-js" href="${l}#icon-award"></use> 
        </svg>
        ${s}
      </span>              
    </a>`),t}const P="/my-portfolio/assets/goit-2a057e45.jpg",R="/my-portfolio/assets/ic-0ad4c2b9.jpg",O="/my-portfolio/assets/mpti-153757fb.jpg",x="/my-portfolio/assets/master-b64fa205.jpg",B="/my-portfolio/assets/phd-4ed3ca4d.jpg",K=[{imgSrc:P,imgAlt:"goit",schoolName:"IT School GoIT",speciality:"Fullstack Developer",degree:"Fullstack Developer",period:"2023 - 2024",sertImgUrl:"",isDiploma:!1},{imgSrc:R,imgAlt:"IC",schoolName:"Post-graduate, V.M. Glushkov Institute of Cybernetics of NAS of Ukraine, Kyiv",speciality:"Mathematical Modeling and Numerical Methods in Scientific Research",degree:"PhD (Cand. of Phys. and Math. Sciences)",period:"1992 - 1996",sertImgUrl:B,isDiploma:!0},{imgSrc:O,imgAlt:"MPTI",schoolName:"Moscow Physics and Technology Institute (MPTI)",speciality:"Applied Mathematics",degree:"Master of Science in the Field of Applied Mathematics and Information Technology",period:"1982 - 1988",sertImgUrl:x,isDiploma:!0}];function q(e){const t=N(K);e.innerHTML=t}function _(e){return e.map(({id:t,sertImgSrc:i,sertImgUrl:s,sertImgAlt:a,sertTitle:o,sertDate:c})=>`
    <li class="sert-item">
        <a calss = "sert-link gt-link-js" href="${s}" target="_blank" rel="noopener"> 
         <div class="sert-img-inner gt-link-js">
          <img
            class="sert-img gt-link-js"
            src="${i}"
            alt="${a}"
            data-id=${t},
            width="100"
            height="100"
          />   
            <div class="sert-img-darkened gt-link-js"></div>  
           </div>
            <div class="sert-info-container">       
              <p class="sert-date">${c}</p>
            </div>
        </a>
    </li>
  `).join("")}const H="/my-portfolio/assets/cisco-cybersecurity-d427ef46.png",u="/my-portfolio/assets/cisco-js1-2b9ae2af.png",G=[{id:1,sertImgSrc:H,sertImgUrl:"https://www.credly.com/badges/d6ea3773-467b-4918-9086-d4ab36940bec/public_url",sertImgAlt:"Introduction to Cybersecurity",sertTitle:"Introduction to Cybersecurity",sertDate:"Dec 2023"},{id:2,sertImgSrc:u,sertImgUrl:"https://www.credly.com/badges/1f678ba2-192e-4bcf-bd42-c3a974a8b3f6/public_url",sertImgAlt:"JavaScript Essentials 1",sertTitle:"JavaScript Essentials 1",sertDate:"Dec 2023"},{id:3,sertImgSrc:u,sertImgUrl:"https://www.credly.com/badges/1293d70e-ad5d-4860-81d7-0ff61d07a300/public_url",sertImgAlt:"Python Essentials 1",sertTitle:"Python Essentials 1",sertDate:"Dec 2023"}];function F(e){const t=_(G);e.innerHTML=t}const V=".experience-js",J="Certifications",W="Education",z="Experience";let n=null;const g="filter-button-active",r=document.querySelector(V),d=document.querySelector(".filters-buttons");d&&(n=d.firstElementChild,d.addEventListener("click",X));function X(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;switch(e.target.dataset.filter){case z:y(r);break;case W:q(r);break;case J:console.log("Filter by Certifications"),F(r);break;default:console.log("Unknown filter")}Y(e.target)}function Y(e){n&&n.classList.remove(g),e&&e.classList.add(g),n=e}r&&y(r);const v=document.querySelectorAll(".button-home"),w=document.querySelectorAll(".button-favorites");h(v,w);w.forEach(e=>{e.addEventListener("click",t=>{h([e],v)})});k();const Q={iconURL:l,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Z=document.querySelector(".social-list");I(Z,Q,S);function ee(e={}){const{imgUrl:t}=e;return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${l}#icon-x"></use>
              </svg>
            </button>           
              <img
                src="${t}"
                alt="project title photo"
                class="diploma-image-modal"
                width="900"
              />                    
          </div>
        </div>   

      `}const te=(e,t)=>{const i=ee(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",i)},ie=".container-filters",b="diploma-js",se="gt-link-js",ae=document.querySelector(U),f=document.querySelector(ie);f&&f.addEventListener("click",oe);function oe(e){e.preventDefault();const t=e.target;if(t.classList.contains(b)){const i=re(t);i&&(te({imgUrl:i},ae),L())}else{const i=M(t,se);i&&window.open(i,"_blank","noreopen")}}function re(e){let t,i;return e.classList.contains(b)&&(e.nodeName==="a"?i=e:i=e.closest("a")),i&&(t=i.getAttribute("href")),t}
//# sourceMappingURL=commonHelpers.js.map
