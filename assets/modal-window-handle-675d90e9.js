(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const d="/my-portfolio/assets/symbols-3fd416ec.svg",u=[{url:"https://t.me/presich_v",id:"#telegram",label:"telegram icon",hrefTag:"telegram"},{url:"https://www.linkedin.com/in/valentyna-aleksandrova-b5000a303/",id:"#linkedin",label:"linkedin icon",hrefTag:"linkedin"},{url:"https://github.com/VPresich",id:"#github",label:"githubicon",hrefTag:"github"}];function v(e,t=[]){const{iconURL:s,iconContainerClass:i,iconLinkClass:n,iconClass:o}=e;return t.reduce((c,{url:k,id:b,label:g,hrefTag:h})=>c+`
        <li class="${i}">
            <a class="${n}" target="_blank" rel="noopener" href="${k}">
            <svg class="${o}" aria-label="${g}" id=${b}>
                <use href="${s}#${h}"></use>
            </svg>
            </a>
        </li>
      `,"")}function m(e,t,s=[]){const i=v(t,s);e.innerHTML="",e.insertAdjacentHTML("beforeend",i)}const B=()=>{const e={iconURL:d,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link",iconClass:"social-list-icon"},t=document.querySelector(".social-list-header");m(t,e,u);const s={iconURL:d,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link-menu",iconClass:"social-list-icon-menu"},i=document.querySelector(".social-list-menu");m(i,s,u)},C=document.querySelector(".js-open-menu-btn"),f=document.querySelector(".js-mobile-menu"),E=document.querySelector(".js-mobile-menu-close-btn"),L="is-open";C.addEventListener("click",()=>{f.classList.add(L)});E.addEventListener("click",()=>{f.classList.remove(L)});function S(e){e.classList.add("active-btn"),e.classList.remove("btn")}function w(e){e.classList.remove("active-btn"),e.classList.add("btn")}function $(e,t){Array.from(e).forEach(s=>{S(s)}),Array.from(t).forEach(s=>{w(s)})}const A="Escape",M=".modal-backdrop",p="is-open",O=".modal-close-btn";let l;const r=document.querySelector(M);r&&r.addEventListener("click",T);function T(e){e.currentTarget===e.target&&a()}function a(e){window.removeEventListener("keydown",y),r.classList.remove(p)}function q(){r.classList.add(p),window.addEventListener("keydown",y),l=document.querySelector(O),l&&l.addEventListener("click",a)}function y(e){console.log("Key"),e.code===A&&a()}export{M as S,B as a,m as c,d as i,$ as m,q as o,u as s};
//# sourceMappingURL=modal-window-handle-675d90e9.js.map
