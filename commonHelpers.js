import{g as h,m as d,a as v,c as y,s as k,i as M}from"./assets/handle-menu-buttons-249c4640.js";function S(e){return e.map(i=>{const{title:o,company:n,period:s,duties:r}=i,c=r.map(f=>`<li class="duties-list-item">${f}</li>`).join("");return`
      <li class="experience-item">
        <div class="experience-info-container">
          <h3 class="experience-item-title">${o}</h3>
          <p class="experience-company">${n}</p>
          <p class="experience-period">${s}</p>
          <ul class="duties-list">${c}</ul>
        </div>
      </li>
    `}).join("")}const A=[{title:"C++/Python Programmer, Data Analyst",company:"BIT-TEAM comp. | Ukraine, Kyiv",period:"January 2016 - up to now",duties:["Development and programming of algorithms for solving navigation problems","Researching algorithms in the MATLAB environment. Exploring algorithms with Python frameworks","Exploring algorithms with Python frameworks","Statistical analysis of large data"]},{title:"Senior researcher",company:"NTUU KPI, IPSA | Ukraine, Kyiv",period:"November 2005 - November 2015",duties:["Scientific research (Applied Mathematics, Numerical Methods of Nonlinear Optimization, Mathematical Modeling)","Programming (C++, MatLab)","Writing tutorials and research reports"]},{title:"Developer",company:"Software MacKiev comp. | Ukraine, Kyiv",period:"November 2001 - January 2007",duties:["Software development in Objective-C","GUI development in RealBasic","Porting software from Windows to macOS"]},{title:"Senior Lecturer, Associate Professor",company:"KNUTE | Ukraine, Kyiv",period:"September 1997 - October 2005",duties:["Lectures and practical classes on Algorithms, Programming Languages, Relational Databases and Information Technologies","Writing tutorials and tests for students"]},{title:"Researcher",company:"V.M. Glushkov IC (NAS of Ukraine) | Kyiv",period:"August 1988 - October 1996",duties:['Scientific research in the field of Nonlinear Optimization and Variational Inequalities. Dissertation: "Numerical Methods for Solving Variational Inequalities."',"Development of software packages for solving problems in Nonlinear Optimization and Variational Inequalities"]}];function p(e){const i=S(A);e.innerHTML=i}function I(e){return e.map(({imgSrc:i,imgAlt:o,schoolName:n,speciality:s,degree:r,period:c})=>`
    <li class="education-item">
      <img
        class="education-img"
        src="${h(i)}"
        alt="${o}"
        width="100"
        height="100"
      />
      <div class="education-info-container">
        <h3 class="education-item-title">${n}</h3>
        <h4 class="education-speciality">${s}</h4>
        <p class="education-degree">${r}</p>
        <p class="education-period">${c}</p>
      </div>
    </li>
  `).join("")}const N=[{imgSrc:"../img/goit.jpg",imgAlt:"goit",schoolName:"IT School GoIT",speciality:"Fullstack Developer",degree:"Fullstack Developer",period:"2023 - 2024"},{imgSrc:"../img/ic.jpg",imgAlt:"IC",schoolName:"Post-graduate, V.M. Glushkov Institute of Cybernetics of NAS of Ukraine, Kyiv",speciality:"Mathematical Modeling and Numerical Methods in Scientific Research",degree:"Ph.D. (Cand. of Phys. and Math. Sciences)",period:"1992 - 1996"},{imgSrc:"../img/mpti.jpg",imgAlt:"MPTI",schoolName:"Moscow Physics and Technology Institute (MPTI)",speciality:"Applied Mathematics",degree:"Master of Science in the Field of Applied Mathematics and Information Technology",period:"1982 - 1988"}];function C(e){const i=I(N);e.innerHTML=i}const L=".experience-js";let t=null;const m="filter-button-active",a=document.querySelector(L),l=document.querySelector(".filters-buttons");l&&(t=l.firstElementChild,l.addEventListener("click",T));function T(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;switch(e.target.dataset.filter){case"Experience":p(a);break;case"Education":C(a);break;case"Certifications":console.log("Filter by Certifications");break;default:console.log("Unknown filter")}b(e.target)}function b(e){t&&t.classList.remove(m),e&&e.classList.add(m),t=e}a&&p(a);const u=document.querySelectorAll(".button-home"),g=document.querySelectorAll(".button-favorites");d(u,g);g.forEach(e=>{e.addEventListener("click",i=>{d([e],u)})});v();const P={iconURL:M,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},U=document.querySelector(".social-list");y(U,P,k);
//# sourceMappingURL=commonHelpers.js.map
