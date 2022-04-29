const elHamburgerBtn = document.querySelector(".site-header__hamburger");

const elHeader = document.querySelector(".site-header")

elHamburgerBtn.addEventListener("click", function(){
  elHeader.classList.toggle("site-header--open")
})