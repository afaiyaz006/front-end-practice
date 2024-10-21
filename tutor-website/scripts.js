const burgermenu = document.querySelector('.navbar .mobile-nav-items');
const toggleButton = document.querySelector('.navbar .burger-button');


window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
  
    if (window.scrollY > 0) {
        console.log("YES")
        
        navbar.classList.add('navbar-while-scrolling');
    } else {
        navbar.classList.remove('navbar-while-scrolling');
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    toggleButton.addEventListener('click', function () {
        console.log("Clicked toggle...")
        console.log(burgermenu)
        burgermenu.classList.toggle('active');
    });
    });