let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    Loginform.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

}



let Loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    Loginform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    Loginform.classList.remove('active');
    searchForm.classList.remove('active');
   
}
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    shoppingCart.classList.remove('active');
    Loginform.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});