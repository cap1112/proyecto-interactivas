
let animationEfect = "animate__fadeInLeft";

var swiper = new Swiper(".swiper", {

    effect: "slide",
    slidesPerView: 3,
    spaceBetween: 30,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-next-button',
      prevEl: '.swiper-preview-button',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
  });
  
  var swiper = new Swiper(".swiperBackground", {
    slidesPerView: 1,
    orientation: "vertical",
    effect: 'fade',
    fadeEffect: {
      crossFade: false
    },
    pagination: {
  
      el: ".swiper-pagination",
      clickable: true,
  
    },
  
    navigation: {
      nextEl: '.swiper-next-button',
      prevEl: '.swiper-preview-button',
    },
  });
  
  let products = [
    "https://www.ejemplo1.com",
    { title: "TACOS DE CARNITAS", description: "8 tacos with meat al pastor, accompanied by homemade tortillas, salsa, onion and cilantro.", hlink: "1st link" },
    { title: "TAZÓN DE POZOLE", description: "Traditional Mexican stew featuring tender meat, hearty hominy, and an array of vibrant garnishes.", hlink: "2nd link" },
    { title: "POZOLE BOWL", description: "Savor the flavors of this classic Mexican stew, featuring succulent meat, hearty hominy, and an array of vibrant toppings.", hlink: "2nd link" },
    { title: "ENCHILADA PLATE", description: "Indulge in a delicious plate of enchiladas, filled with your choice of savory ingredients and topped with rich sauce and cheese.", hlink: "3rd link" },
    { title: "TACO COMBO", description: "Enjoy our mouthwatering taco combo, offering a variety of flavorful tacos with fresh toppings and homemade salsa.", hlink: "4th link" },
    { title: "BURRITO SUPREME", description: "Delight in our Burrito Supreme, a hearty and satisfying burrito stuffed with your favorite fillings and smothered in savory sauce.", hlink: "5th link" },
    { title: "MEXICAN CORN", description: "Experience the taste of authentic Mexican street corn, grilled to perfection and coated with a blend of spices and cheese.", hlink: "6th link" },
    { title: "SIZZLING FAJITAS", description: "Sizzle with excitement as you savor our sizzling fajitas, a sizzling platter of tender meat, grilled vegetables, and warm tortillas.", hlink: "7th link" },
    { title: "GUACAMOLE DIP", description: "Dip into perfection with our creamy guacamole dip, made from ripe avocados, tomatoes, onions, and a dash of lime.", hlink: "8th link" },
    { title: "MARGARITA SPECIAL", description: "Quench your thirst with our Margarita Special, a refreshing blend of tequila, citrus, and a touch of sweetness.", hlink: "9th link" },
    { title: "CHURROS DELIGHT", description: "End your meal on a sweet note with our Churros Delight, crispy and sugary churros served with a rich chocolate dipping sauce.", hlink: "10th link" },
  ];
  
  
  function init() {  /*init=inicializar código*/
    document.getElementById("swiper-preview-button").addEventListener("click", function () {
      textChange();
      textAddAnimation();
      setTimeout(function () {
        textRemoveAnimation();
      }, 1000);
    })
  
    document.getElementById("swiper-next-button").addEventListener("click", function () {
      textChange();
      textAddAnimation();
      setTimeout(function () {
        textRemoveAnimation();
      }, 1000);
    })
    // document.querySelector('.header-title').classList.remove("animate__animated");
    // document.querySelector('.header-title').classList.remove("animate__fadeInUp");
  
  }
  
  function textChange() {
    let currentCard = document.querySelector('.swiper-slide-active');
    let cardPosition = currentCard.getAttribute("aria-label");
    for (let index = 0; index < 10; index++) {
      if (cardPosition == index + " / 10") {
        document.querySelector('.header-title').innerHTML = products[index].title;
        document.querySelector('.header-description').innerHTML = products[index].description;
        document.querySelector('.order-btn').setAttribute("href", products[index].hlink);
      }
    }
  }
  function textAddAnimation() {
 
    document.querySelector('.header-title').classList.add("animate__animated");
    document.querySelector('.header-title').classList.add(animationEfect);
    document.querySelector(".header-description").classList.add("animate__animated");
    document.querySelector(".header-description").classList.add(animationEfect);
    document.querySelector('.order-btn-container').classList.add("animate__animated");
    document.querySelector('.order-btn-container').classList.add(animationEfect);
  }
  
  function textRemoveAnimation() {
    document.querySelector('.header-title').classList.remove("animate__animated");
    document.querySelector('.header-title').classList.remove(animationEfect);
    document.querySelector(".header-description").classList.remove("animate__animated");
    document.querySelector(".header-description").classList.remove(animationEfect);
    document.querySelector('.order-btn-container').classList.remove("animate__animated");
    document.querySelector('.order-btn-container').classList.remove(animationEfect);
  }
  
  //main loading
  document.addEventListener('DOMContentLoaded', function () {
    init();
  })
  
  