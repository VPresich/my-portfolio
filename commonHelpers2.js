var u=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var y=(o,e,t)=>(u(o,e,"read from private field"),t?t.call(o):e.get(o)),h=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},v=(o,e,t,a)=>(u(o,e,"write to private field"),a?a.call(o,t):e.set(o,t),t);var s=(o,e,t)=>(u(o,e,"access private method"),t);import{m as L,a as I,i as m,g as H}from"./assets/handle-menu-buttons-249c4640.js";const O="https://energyflow.b.goit.study/api/";var p,i,n;class B{constructor(e){h(this,i);h(this,p,"");v(this,p,e)}async objectGetRequest(e){return s(this,i,n).call(this,e)}async objectCreateRequest(e,t){return s(this,i,n).call(this,e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,t){return s(this,i,n).call(this,`${e}/${t}`,{method:"DELETE"})}async objectUpdateRequest(e,t){return s(this,i,n).call(this,`${e}/${t.id}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async objectPatchRequest(e,t){const{id:a,...r}=t;return s(this,i,n).call(this,`${e}/${a}/rating`,{method:"PATCH",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})}}p=new WeakMap,i=new WeakSet,n=async function(e,t={}){try{const a=await fetch(y(this,p)+e,t);if(!a.ok)throw new Error(`HTTP error, status: ${a.status}`);return a.json()}catch(a){throw a}};const M=document.querySelector(".js-quote"),w="quote",b="date",P=new B(O);U();async function U(){try{const{quote:o,author:e}=await F();J({quote:o,author:e})}catch(o){console.error("Error fetching or displaying quote:",o)}}async function F(){const o=localStorage.getItem(b),e=localStorage.getItem(w),a=new Date().toISOString().split("T")[0];if(o===a&&e){const c=JSON.parse(e);if(c.quote&&c.author)return c}const r=await _();return localStorage.setItem(b,a),localStorage.setItem(w,JSON.stringify(r)),r}async function _(){const{quote:o,author:e}=await P.objectGetRequest("quote");return{quote:o,author:e}}function J({quote:o,author:e}){M.innerHTML=`
    <p class="quote-text">${o}</p>
    <h3 class="quote-author">${e}</h3>
  `}const S=document.querySelectorAll(".button-home"),q=document.querySelectorAll(".button-portfolio");L(q,S);q.forEach(o=>{o.addEventListener("click",e=>{L([o],S)})});I();function N(o){return o.map(e=>`
    <li class="portfolio-card" data-id="${e.id}">
      <div class="portfolio-card-top-line">
        <div class="portfolio-card-top-left">
          <p class="portfolio-card-type portfolio-param">${e.type}</p>
          ${e.teamLeader}
        </div>
        <button type="submit" class="portfolio-details-btn gallery-start" data-id="${e.id}">
          Details
          <span class="arrow-icon-span gallery-start">
            <svg class="arrow-icon gallery-start" width="16" height="16" aria-label="arrow icon" stroke="black">
              <use href="${m}#icon-arrow" class="gallery-start"></use>
            </svg>
          </span>
        </button>
      </div>

      <div class="portfolio-card-name-container">
        <a class="portfolio-github-icon-link gt-link-js" target="_blank" rel="noopener" href="${e.githubLink}">
          <svg class="github-icon gt-link-js" width="32" height="32" aria-label="github icon">
            <use class="gt-link-js" href="${m}#github"></use>
          </svg>
        </a>
        <h3 class="portfolio-card-name">${e.name}</h3>
      </div>

      <div class="portfolio-card-details">
        <ul class="portfolio-card-details-list list">
          <li class="portfolio-card-details-item">
            <p class="portfolio-card-details-text portfolio-param">
              Participants:
              <span class="portfolio-card-text-part">${e.participants}</span>
            </p>
          </li>
          <li class="portfolio-card-details-item portfolio-param">
            <p class="portfolio-card-details-text">
              Languages:
              <span class="portfolio-card-text-part">${e.languages.join(" ")}</span>
            </p>
          </li>
          <li class="portfolio-card-details-item portfolio-param">
            <p class="portfolio-card-details-text">
              Target:
              <span class="portfolio-card-text-part">${e.target}</span>
            </p>
          </li>
        </ul>
      </div>
    </li>
  `).join("")}const x=[{id:1,type:"Project",teamLeader:"Team Leader",img:"./img/dynamic.jpg",githubLink:"https://vpresich.github.io/dynamics/",name:"Dynamics",participants:9,languages:["HTML5","CSS3","JavaScript"],target:"Study",short:`The app "Dynamics" provides a comprehensive platform for workout enthusiasts,
featuring server integration, exercise uploads, modal window previews, favorites addition,
and feedback submission for exercises and ratings`,desc:`The app "Dynamics" provides a comprehensive platform for workout enthusiasts,
featuring server integration, exercise uploads, modal window previews, favorites addition,
and feedback submission for exercises and ratings.
In the Header section users will find an menu for navigation.
The Hero section showcases motivational images and highlights current promotions or featured workouts.
Users can receive a daily "Quote of the Day," sourced from our server, providing motivation and inspiration
to keep them focused on their fitness journey.
The Exersises Library section offers a vast collection of exercises categorized by muscle group,
difficulty level, or workout type. Users can easily browse, search, and access detailed descriptions
and instructional videos for each exercise.
The "Favorites" feature enables users to save their preferred exercises for quick access
and future reference. They can easily add or remove exercises from their favorites list with just a click.
Users can provide valuable feedback and ratings for each exercise through the "Ratings" form.
This helps improve the app's content quality and provides insights for other users.
Finally, the "Footer" section contains essential links, such as contact information,
support resources, and social media channels, ensuring users can stay connected and informed
about updates and announcements.`},{id:2,type:"Project",teamLeader:"Team Leader",img:"../../img/ukr-24.jpg",githubLink:"https://vpresich.github.io/team24-project-ukr/",name:"Traditional Ukrainian Artistry",participants:9,languages:["HTML5","CSS3","JavaScript"],target:"Study",short:`The app offers a unique platform for advertising and ordering embroidered shirts,
combining cultural heritage with modern technology.`,desc:`The app offers a unique platform for advertising and ordering embroidered shirts,
combining cultural heritage with modern technology.
In the Header section, you'll find a convenient navigation menu,
while the Hero section welcomes you with vibrant images and current offers.
In the "About Us" section, you'll learn more about our company and our goals. 
The "Our Collection" section showcases a variety of shirt styles and designs available for ordering.
Choose the one that suits your taste and style.
"Your Order" is where you can easily and conveniently place an order for your selected embroidered shirt.

In the "Testimonials" you'll see reviews from our satisfied customers who will share their experiences with you.

Finally, at the bottom of the page is the "Footer" section, where you'll find contact information, links to social media, 
and other important information about our app.`},{id:3,type:"Project",teamLeader:"Developer",img:"../../img/chocolate.jpg",githubLink:"https://vpresich.github.io/goit-markup-classwork-chocolate/",name:"Chocolate",participants:1,languages:["HTML5","CSS3","JavaScript"],target:"Study",short:`The application offers a unique platform for chocolate enthusiasts,
combining a wide range of products, recipes, and the ability to place orders through a modal window.
Here's how our application looks on different devices`,desc:`The application offers a unique platform for chocolate enthusiasts,
combining a wide range of products, recipes, and the ability to place orders through a modal window.
Here's how our application looks on different devices:

In the Header section, users will find a convenient navigation menu, allowing easy navigation through
various sections of the application.

The Hero section welcomes users with vibrant images of chocolate delicacies,
creating an atmosphere of rich taste and aroma.
The "About" section provides information about the company, 
its history, goals, as well as principles of production and the quality of ingredients used.

In the "Collection" section, users can explore a wide range of chocolate products available
in our application. From classic chocolate bars to exclusive desserts - everyone will find something
to their liking here.

"Your Order" is a convenient place where users can select and place their order through
a modal window. 

In the "Recipes" section, users will find a variety of interesting and delicious recipes using chocolate.
From simple desserts to exquisite candies and cakes - there's something for everyone's taste here.

The "Testimonials" section contains reviews and recommendations from our satisfied customers,
sharing their experiences and impressions about our application.

At the bottom of the page is the "Footer" section, where users will find contact information,
links to social networks, as well as other important information about our application. 
This app is also adapted for convenient viewing on various devices, including desktop computers,
mobile phones, and tablets.`},{id:4,type:"Project",teamLeader:"Developer",img:"../../img/webstudio.jpg",githubLink:"https://vpresich.github.io/goit-markup-hw-06/",name:"Office",participants:1,languages:["HTML5","CSS3","JavaScript"],target:"Study",short:`The application offers a unique platform for chocolate enthusiasts,
combining a wide range of products, recipes, and the ability to place orders through a modal window.
Here's how our application looks on different devices`,desc:`The application offers a unique platform for chocolate enthusiasts,
combining a wide range of products, recipes, and the ability to place orders through a modal window.
Here's how our application looks on different devices`},{id:5,type:"Project",teamLeader:"Developer",img:"../../img/phone-book.jpg",githubLink:"https://goit-react-hw-08-ebon.vercel.app/",name:"Phone Book",participants:1,languages:["Redux Toolkit"],target:"Study",short:"The application is a convenient tool for organizing your contacts. With it, you can store, add, delete, and edit contacts in your phone book. Registration: Create your account to save your contacts and access them from any device.",desc:'The application is a convenient tool for organizing your contacts. With it, you can store, add, delete, and edit contacts in your phone book. Registration: Create your account to save your contacts and access them from any device. Server Interaction: Your contacts are securely stored on the server, allowing you to access them from anywhere. Contact Management: Add new contacts, delete, or edit existing ones quickly and conveniently. Redux Toolkit: The application uses Redux Toolkit for efficient state management, providing responsiveness and scalability. The simple and intuitive interface of the "Phone Book" application makes it the perfect choice for those who want to easily organize their contacts and always have access to them.'},{id:6,type:"Project",teamLeader:"Developer",img:"../../img/film-library.jpg",githubLink:"https://vpresich.github.io/home-filmlibrary/",name:"Film Library",participants:1,languages:["Java Script"],target:"Study",short:'The "FilmLibrary" app is a comprehensive platform for managing your movie collection. With its user-friendly interface and powerful features, organizing and accessing your favorite films has never been easier.',desc:` Key Features. Easily search and browse through a vast library of movies using intuitive filters and sorting options.
Add new movies to your collection or edit existing ones, including details such as title, genre, release year, director, and more.
Leveraging the power of JavaScript, the app utilizes APIs to fetch movie data from external sources, providing up-to-date information and a rich browsing experience. Whether you're a casual movie enthusiast or a dedicated cinephile, the "FilmLibrary" app is your go-to tool for managing and enjoying your movie collection.`},{id:7,type:"Project",teamLeader:"Developer",img:"../../img/movies.jpg",githubLink:"https://goit-react-hw-05-lac-nine.vercel.app/",name:"Movies",participants:1,languages:["React"],target:"Study",short:'The "Movies" app is a comprehensive platform for managing your movie collection. With its user-friendly interface and powerful features, organizing and accessing your favorite films has never been easier.',desc:` Key Features. Easily search and browse through a vast library of movies using intuitive filters and sorting options.
Add new movies to your collection or edit existing ones, including details such as title, genre, release year, director, and more.
Leveraging the power of React, the app utilizes APIs to fetch movie data from external sources, providing up-to-date information and a rich browsing experience. Whether you're a casual movie enthusiast or a dedicated cinephile, the "FilmLibrary" app is your go-to tool for managing and enjoying your movie collection.`}];function Y(o){const e=N(x);o.innerHTML=e}const E=".portfolio-js",W="gallery-start",z="gt-link-js",K=".portfolio-close-btn",Q="Escape",G=".modal-backdrop",j="is-open",k=document.querySelector(E);k&&Y(k);function V(o={}){const{id:e,type:t,teamLeader:a,img:r,name:c,participants:$,languages:R,target:A,short:D,desc:ie}=o;return`
        <div class="portfolio-window">
          <div class="portfolio-container">
            <button class="portfolio-close-btn" type="button">
              <svg
                class="portfolio-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${m}#icon-x"></use>
              </svg>
            </button>
            <div class="portfolio-image-wrapper">
              <img
                src="${H(r)}"
                alt=""
                class="portfolio-image-modal"
              />
            </div>
            <div class="portfolio-info-wrapper">
              <div class="portfolio-name-container">                
                <p class="portfolio-name">${c}</p>
              </div>
              <div class="portfolio-params-container">
                <ul class="portfolio-params">
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Target</p>
                    <p class="portfolio-param-value exercise-param-target">${A}</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Role</p>
                    <p class="portfolio-param-value exercise-param-bodypart">${a}</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">FrameWork</p>
                    <p class="portfolio-param-value portfolio-param-equipment">Yes</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Team</p>
                    <p class="portfolio-param-value portfolio-param-popularuty">${$}</p>
                  </li>
                </ul>
                <p class="portfolio-lang">Languages</p>
                <p class="portfolio-lang-value">${R.join(",")}</p>
              </div>
              <p class="portfolio-description">${D}</p>              
            </div>
          </div>
        </div>   

      `}const X=(o,e)=>{const t=V(o);e.innerHTML="",e.insertAdjacentHTML("beforeend",t)};function Z(o){return x.find(e=>e.id==o)}let f,d,l=document.querySelector(G);l&&l.addEventListener("click",ae);const T=document.querySelector(E);T&&T.addEventListener("click",ee);function ee(o){o.preventDefault();const e=o.target;if(e.classList.contains(W)){if(e.nodeName!=="BUTTON"?d=e.closest("BUTTON").dataset.id:d=e.dataset.id,!d)return;const t=Z(d);X(t,l),te()}else{const t=oe(e);t&&window.open(t,"_blank","noreopen")}}function oe(o){let e,t;return o.classList.contains(z)&&(o.nodeName==="a"?t=o:t=o.closest("a")),t&&(e=t.getAttribute("href")),e}function g(o){window.removeEventListener("keydown",C),l.classList.remove(j)}function te(){l.classList.add(j),window.addEventListener("keydown",C),f=document.querySelector(K),f&&f.addEventListener("click",g)}function C(o){o.code===Q&&g()}function ae(o){o.currentTarget===o.target&&g()}
//# sourceMappingURL=commonHelpers2.js.map