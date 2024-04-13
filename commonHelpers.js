import{m as d,a as h,c as y,s as v,i as k}from"./assets/handle-menu-buttons-40d72d31.js";function M(e){return e.map(i=>{const{title:o,company:t,period:s,duties:r}=i,c=r.map(g=>`<li class="duties-list-item">${g}</li>`).join("");return`
      <li class="experience-item">
        <div class="experience-info-container">
          <h3 class="experience-item-title">${o}</h3>
          <p class="experience-company">${t}</p>
          <p class="experience-period">${s}</p>
          <ul class="duties-list">${c}</ul>
        </div>
      </li>
    `}).join("")}const S=[{title:"C++/Python Programmer, Data Analyst",company:"BIT-TEAM comp. | Ukraine, Kyiv",period:"January 2016 - up to now",duties:["Development and programming of algorithms for solving navigation problems","Researching algorithms in the MATLAB environment. Exploring algorithms with Python frameworks","Exploring algorithms with Python frameworks","Statistical analysis of large data"]},{title:"Senior researcher",company:"NTUU KPI, IPSA | Ukraine, Kyiv",period:"November 2005 - November 2015",duties:["Scientific research (Applied Mathematics, Numerical Methods of Nonlinear Optimization, Mathematical Modeling)","Programming (C++, MatLab)","Writing tutorials and research reports"]},{title:"Developer",company:"Software MacKiev comp. | Ukraine, Kyiv",period:"November 2001 - January 2007",duties:["Software development in Objective-C","GUI development in RealBasic","Porting software from Windows to macOS"]},{title:"Senior Lecturer, Associate Professor",company:"KNUTE | Ukraine, Kyiv",period:"September 1997 - October 2005",duties:["Lectures and practical classes on Algorithms, Programming Languages, Relational Databases and Information Technologies","Writing tutorials and tests for students"]},{title:"Researcher",company:"V.M. Glushkov IC (NAS of Ukraine) | Kyiv",period:"August 1988 - October 1996",duties:['Scientific research in the field of Nonlinear Optimization and Variational Inequalities. Dissertation: "Numerical Methods for Solving Variational Inequalities."',"Development of software packages for solving problems in Nonlinear Optimization and Variational Inequalities"]}];function p(e){const i=M(S);e.innerHTML=i}function A(e){const i=window.location.href,o=new URL(i).origin,t=new URL(e,o).href;return console.log(t),t}function U(e){return e.map(({imgSrc:i,imgAlt:o,schoolName:t,speciality:s,degree:r,period:c})=>`
    <li class="education-item">
      <img
        class="education-img"
        src="${A(i)}"
        alt="${o}"
        width="100"
        height="100"
      />
      <div class="education-info-container">
        <h3 class="education-item-title">${t}</h3>
        <h4 class="education-speciality">${s}</h4>
        <p class="education-degree">${r}</p>
        <p class="education-period">${c}</p>
      </div>
    </li>
  `).join("")}const I="/my-portfolio/assets/goit-2a057e45.jpg",b="/my-portfolio/assets/ic-0ad4c2b9.jpg",L="/my-portfolio/assets/mpti-153757fb.jpg",N=[{imgSrc:I,imgAlt:"goit",schoolName:"IT School GoIT",speciality:"Fullstack Developer",degree:"Fullstack Developer",period:"2023 - 2024"},{imgSrc:b,imgAlt:"IC",schoolName:"Post-graduate, V.M. Glushkov Institute of Cybernetics of NAS of Ukraine, Kyiv",speciality:"Mathematical Modeling and Numerical Methods in Scientific Research",degree:"Ph.D. (Cand. of Phys. and Math. Sciences)",period:"1992 - 1996"},{imgSrc:L,imgAlt:"MPTI",schoolName:"Moscow Physics and Technology Institute (MPTI)",speciality:"Applied Mathematics",degree:"Master of Science in the Field of Applied Mathematics and Information Technology",period:"1982 - 1988"}];function C(e){const i=U(N);e.innerHTML=i}const w=".experience-js";let a=null;const m="filter-button-active",n=document.querySelector(w),l=document.querySelector(".filters-buttons");l&&(a=l.firstElementChild,l.addEventListener("click",T));function T(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;switch(e.target.dataset.filter){case"Experience":p(n);break;case"Education":C(n);break;case"Certifications":console.log("Filter by Certifications");break;default:console.log("Unknown filter")}P(e.target)}function P(e){a&&a.classList.remove(m),e&&e.classList.add(m),a=e}n&&p(n);const u=document.querySelectorAll(".button-home"),f=document.querySelectorAll(".button-favorites");d(u,f);f.forEach(e=>{e.addEventListener("click",i=>{d([e],u)})});h();const x={iconURL:k,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},D=document.querySelector(".social-list");y(D,x,v);
//# sourceMappingURL=commonHelpers.js.map
