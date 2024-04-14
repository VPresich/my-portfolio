import{m as l,a as w,i as t,S as k,o as T}from"./assets/modal-window-handle-675d90e9.js";const c=document.querySelectorAll(".button-home"),p=document.querySelectorAll(".button-portfolio");l(p,c);p.forEach(o=>{o.addEventListener("click",e=>{l([o],c)})});w();function L(o){return o.map(e=>`
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
              <use href="${t}#icon-arrow" class="gallery-start"></use>
            </svg>
          </span>
        </button>
      </div>

      <div class="portfolio-card-name-container">
        <a class="portfolio-github-icon-link gt-link-js" target="_blank" rel="noopener" href="${e.githubLink}">
          <svg class="github-icon gt-link-js" width="32" height="32" aria-label="github icon">
            <use class="gt-link-js" href="${t}#github"></use>
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
  `).join("")}const x="/my-portfolio/assets/dynamic-8b6e8422.jpg",S="/my-portfolio/assets/ukr-24-8c6d5624.jpg",U="/my-portfolio/assets/chocolate-96ef87ef.jpg",j="/my-portfolio/assets/webstudio-c42042b3.jpg",A="/my-portfolio/assets/phone-book-1beeeb0f.jpg",q="/my-portfolio/assets/film-library-a8a40eb8.jpg",H="/my-portfolio/assets/movies-f2c1add6.jpg",$="/my-portfolio/assets/book-or-1f1aba55.jpg",C="/my-portfolio/assets/book-vba-19caccb2.jpg",d=[{id:1,type:"Project",teamLeader:"Team Leader",imgSrc:"../../img/dynamic.jpg",imgUrl:x,githubLink:"https://vpresich.github.io/dynamics/",name:"Dynamics",participants:9,languages:["HTML5","CSS3","JavaScript"],target:"Study",framework:"Yes",short:`The app "Dynamics" provides a comprehensive platform for workout enthusiasts,
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
about updates and announcements.`},{id:2,type:"Project",teamLeader:"Team Leader",imgSrc:"../../img/ukr-24.jpg",imgUrl:S,githubLink:"https://vpresich.github.io/team24-project-ukr/",name:"Traditional Ukrainian Artistry",participants:9,languages:["HTML5","CSS3","JavaScript"],target:"Study",framework:"No",short:`The app offers a unique platform for advertising and ordering embroidered shirts,
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
and other important information about our app.`},{id:3,type:"Project",teamLeader:"Developer",imgSrc:"../../img/chocolate.jpg",imgUrl:U,githubLink:"https://vpresich.github.io/goit-markup-classwork-chocolate/",name:"Chocolate",participants:1,languages:["HTML5","CSS3","JavaScript"],target:"Study",framework:"No",short:`The application offers a unique platform for chocolate enthusiasts,
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
mobile phones, and tablets.`},{id:4,type:"Project",teamLeader:"Developer",imgSrc:"../../img/webstudio.jpg",imgUrl:j,githubLink:"https://vpresich.github.io/goit-markup-hw-06/",name:"Webstudio",participants:1,languages:["HTML5","CSS3","JavaScript"],target:"Study",framework:"No",short:`The application offers a unique platform for chocolate enthusiasts,
combining a wide range of products, recipes, and the ability to place orders through a modal window.
Here's how our application looks on different devices`,desc:`The application offers a unique platform for chocolate enthusiasts,
combining a wide range of products, recipes, and the ability to place orders through a modal window.
Here's how our application looks on different devices`},{id:5,type:"Project",teamLeader:"Developer",imgSrc:"../../img/phone-book.jpg",imgUrl:A,githubLink:"https://goit-react-hw-08-ebon.vercel.app/",name:"Phone Book",participants:1,languages:["Redux Toolkit"],target:"Study",framework:"Yes",short:"The application is a convenient tool for organizing your contacts. With it, you can store, add, delete, and edit contacts in your phone book. Registration: Create your account to save your contacts and access them from any device.",desc:'The application is a convenient tool for organizing your contacts. With it, you can store, add, delete, and edit contacts in your phone book. Registration: Create your account to save your contacts and access them from any device. Server Interaction: Your contacts are securely stored on the server, allowing you to access them from anywhere. Contact Management: Add new contacts, delete, or edit existing ones quickly and conveniently. Redux Toolkit: The application uses Redux Toolkit for efficient state management, providing responsiveness and scalability. The simple and intuitive interface of the "Phone Book" application makes it the perfect choice for those who want to easily organize their contacts and always have access to them.'},{id:6,type:"Project",teamLeader:"Developer",imgSrc:"../../img/film-library.jpg",imgUrl:q,githubLink:"https://vpresich.github.io/home-filmlibrary/",name:"Film Library",participants:1,languages:["Java Script"],target:"Study",framework:"No",short:'The "FilmLibrary" app is a comprehensive platform for managing your movie collection. With its user-friendly interface and powerful features, organizing and accessing your favorite films has never been easier.',desc:` Key Features. Easily search and browse through a vast library of movies using intuitive filters and sorting options. Add new movies to your collection or edit existing ones, including details such as title, genre, release year, director, and more. Leveraging the power of JavaScript, the app utilizes APIs to fetch movie data from external sources, providing up-to-date information and a rich browsing experience. Whether you're a casual movie enthusiast or a dedicated cinephile, the "FilmLibrary" app is your go-to tool for managing and enjoying your movie collection.`},{id:7,type:"Project",teamLeader:"Developer",imgSrc:"../../img/movies.jpg",imgUrl:H,githubLink:"https://goit-react-hw-05-lac-nine.vercel.app/",name:"Movies",participants:1,languages:["React"],target:"Study",framework:"Yes",short:'The "Movies" app is a comprehensive platform for managing your movie collection. With its user-friendly interface and powerful features, organizing and accessing your favorite films has never been easier.',desc:` Key Features. Easily search and browse through a vast library of movies using intuitive filters and sorting options.
Add new movies to your collection or edit existing ones, including details such as title, genre, release year, director, and more.
Leveraging the power of React, the app utilizes APIs to fetch movie data from external sources, providing up-to-date information and a rich browsing experience. Whether you're a casual movie enthusiast or a dedicated cinephile, the "FilmLibrary" app is your go-to tool for managing and enjoying your movie collection.`},{id:8,type:"Book",teamLeader:"Writer",imgSrc:"../../img/book-or.jpg",imgUrl:$,githubLink:"https://academia-pc.com.ua/product/84",name:"Operations Research",participants:2,languages:["Ukrainian"],target:"For students",framework:"-",short:"The description covers the basic concepts and methodological principles of operations research, mathematical methods of single and multi-criteria optimization, elements of duality theory, as well as methods for solving various types of mathematical programming problems, such as linear, nonlinear, integer, stochastic, and dynamic programming, as well as network planning and inventory management problems. It also touches upon elements of game theory and queuing theory.",desc:"The description covers the basic concepts and methodological principles of operations research, mathematical methods of single and multi-criteria optimization, elements of duality theory, as well as methods for solving various types of mathematical programming problems, such as linear, nonlinear, integer, stochastic, and dynamic programming, as well as network planning and inventory management problems. It also touches upon elements of game theory and queuing theory."},{id:9,type:"Book",teamLeader:"Writer",imgSrc:"../../img/book-vba.jpg",imgUrl:C,githubLink:"https://libtomcat.knteu.kiev.ua/library/DocDescription?doc_id=75299",name:"VBA in examples and tasks",participants:1,languages:["Ukrainian"],target:"For students",framework:"-",short:"This handbook serves as a comprehensive guide tailored for students, encompassing a wide array of examples and practical exercises. The first part of the book delves into the intricacies of the built-in programming language, providing a thorough understanding of its functionalities and capabilities. With a focus on hands-on learning, students are presented with various real-world scenarios and tasks, guiding them through the application of programming concepts in practical contexts. Whether delving into basic syntax or exploring advanced features, this resource equips students with the knowledge and skills needed to navigate and utilize the programming language effectively.",desc:"This handbook serves as a comprehensive guide tailored for students, encompassing a wide array of examples and practical exercises. The first part of the book delves into the intricacies of the built-in programming language, providing a thorough understanding of its functionalities and capabilities. With a focus on hands-on learning, students are presented with various real-world scenarios and tasks, guiding them through the application of programming concepts in practical contexts. Whether delving into basic syntax or exploring advanced features, this resource equips students with the knowledge and skills needed to navigate and utilize the programming language effectively."}];function R(o){const e=L(d);o.innerHTML=e}const u=".portfolio-js",F="gallery-start",I="gt-link-js",s=document.querySelector(u);s&&R(s);function M(o={}){const{id:e,type:a,teamLeader:r,img:z,imgUrl:m,name:h,participants:g,languages:f,target:v,short:y,desc:O,framework:b}=o;return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${t}#icon-x"></use>
              </svg>
            </button>
            <div class="portfolio-image-wrapper">
              <img
                src="${m}"
                alt="project title photo"
                class="portfolio-image-modal"
                width="700"
              />
            </div>
            <div class="portfolio-info-wrapper">
              <div class="portfolio-name-container">                
                <p class="portfolio-name">${h}</p>
              </div>
              <div class="portfolio-params-container">
                <ul class="portfolio-params">
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Target</p>
                    <p class="portfolio-param-value exercise-param-target">${v}</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Role</p>
                    <p class="portfolio-param-value exercise-param-bodypart">${r}</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">FrameWork</p>
                    <p class="portfolio-param-value portfolio-param-equipment">${b}</p>
                  </li>
                  <li class="portfolio-params-card">
                    <p class="portfolio-param-name">Team</p>
                    <p class="portfolio-param-value portfolio-param-popularuty">${g}</p>
                  </li>
                </ul>
                <p class="portfolio-lang">Languages</p>
                <p class="portfolio-lang-value">${f.join(",")}</p>
              </div>
              <p class="portfolio-description">${y}</p>              
            </div>
          </div>
        </div>   

      `}const B=(o,e)=>{const a=M(o);e.innerHTML="",e.insertAdjacentHTML("beforeend",a)};function D(o){return d.find(e=>e.id==o)}let i;const W=document.querySelector(k),n=document.querySelector(u);n&&n.addEventListener("click",P);function P(o){o.preventDefault();const e=o.target;if(e.classList.contains(F)){if(e.nodeName!=="BUTTON"?i=e.closest("BUTTON").dataset.id:i=e.dataset.id,!i)return;const a=D(i);B(a,W),T()}else{const a=E(e);a&&window.open(a,"_blank","noreopen")}}function E(o){let e,a;return o.classList.contains(I)&&(o.nodeName==="a"?a=o:a=o.closest("a")),a&&(e=a.getAttribute("href")),e}
//# sourceMappingURL=commonHelpers2.js.map
