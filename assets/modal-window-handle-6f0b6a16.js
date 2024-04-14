(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const d="/my-portfolio/assets/symbols-3fd416ec.svg",u=[{url:"https://t.me/presich_v",id:"#telegram",label:"telegram icon",hrefTag:"telegram"},{url:"https://www.linkedin.com/in/valentyna-aleksandrova-b5000a303/",id:"#linkedin",label:"linkedin icon",hrefTag:"linkedin"},{url:"https://github.com/VPresich",id:"#github",label:"githubicon",hrefTag:"github"}];function v(e,t=[]){const{iconURL:o,iconContainerClass:s,iconLinkClass:n,iconClass:i}=e;return t.reduce((c,{url:y,id:g,label:h,hrefTag:k})=>c+`
        <li class="${s}">
            <a class="${n}" target="_blank" rel="noopener" href="${y}">
            <svg class="${i}" aria-label="${h}" id=${g}>
                <use href="${o}#${k}"></use>
            </svg>
            </a>
        </li>
      `,"")}function m(e,t,o=[]){const s=v(t,o);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)}const B=()=>{const e={iconURL:d,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link",iconClass:"social-list-icon"},t=document.querySelector(".social-list-header");m(t,e,u);const o={iconURL:d,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link-menu",iconClass:"social-list-icon-menu"},s=document.querySelector(".social-list-menu");m(s,o,u)},C=document.querySelector(".js-open-menu-btn"),f=document.querySelector(".js-mobile-menu"),E=document.querySelector(".js-mobile-menu-close-btn"),L="is-open";C.addEventListener("click",()=>{f.classList.add(L)});E.addEventListener("click",()=>{f.classList.remove(L)});function S(e){e.classList.add("active-btn"),e.classList.remove("btn")}function w(e){e.classList.remove("active-btn"),e.classList.add("btn")}function $(e,t){Array.from(e).forEach(o=>{S(o)}),Array.from(t).forEach(o=>{w(o)})}function q(e,t){let o,s;return e.classList.contains(t)&&(e.nodeName==="a"?s=e:s=e.closest("a")),s&&(o=s.getAttribute("href")),o}const A="Escape",M=".modal-backdrop",p="is-open",O=".modal-close-btn";let r;const l=document.querySelector(M);l&&l.addEventListener("click",T);function T(e){e.currentTarget===e.target&&a()}function a(e){window.removeEventListener("keydown",b),l.classList.remove(p)}function I(){l.classList.add(p),window.addEventListener("keydown",b),r=document.querySelector(O),r&&r.addEventListener("click",a)}function b(e){console.log("Key"),e.code===A&&a()}export{M as S,B as a,m as c,q as g,d as i,$ as m,I as o,u as s};
//# sourceMappingURL=modal-window-handle-6f0b6a16.js.map
