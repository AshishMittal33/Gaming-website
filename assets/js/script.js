'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
 /* filterable card */
 let list = document.querySelectorAll('.list');
 let card = document.querySelectorAll('.card');
 for(let i=0; i<list.length;i++){
     list[i].addEventListener('click',function(){
         for(let j=0; j<list.length; j++){
             list[j].classList.remove('active');
         }
         this.classList.add('active');

         let datafilter = this.getAttribute('data-filter');
         for( let k=0; k<card.length; k++)
         {
             card[k].classList.remove('active');
             card[k].classList.add('hide');
             if(card[k].getAttribute("data-item")== datafilter || datafilter == 'all'){
                 card[k].classList.remove('hide');
                 card[k].classList.add('active');
             }
         }
     })
 }