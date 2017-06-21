var modalOpen = document.querySelector(".js-modal-open");
var modalSize = document.querySelector(".modal-size");
var modalClose = document.querySelector(".js-modal-close");

var menuToggle = document.querySelector(".hamburger");
var menuOpen = document.querySelector(".hamburger__open");
var menu = document.querySelector(".main-nav");
var menuClose = document.querySelector(".hamburger__close");



modalOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSize.classList.add("modal-size__show");
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSize.classList.remove("modal-size__show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalSize.classList.contains("modal-size__show")) {
      modalSize.classList.remove("modal-size__show");
    }
  }
});



document.addEventListener("DOMContentLoaded", function(evt) {
  evt.preventDefault();
  if(menu.classList.contains("main-nav--no-js")) {
    menu.classList.remove("main-nav--no-js");
  }
});

menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!menu.classList.contains("main-nav__show")) {
    menu.classList.add("main-nav__show");
    menuClose.classList.add("hamburger__show");
    menuOpen.classList.add("hamburger__hide");
  }
  else {
    menu.classList.remove("main-nav__show");
    menuClose.classList.remove("hamburger__show");
    menuOpen.classList.remove("hamburger__hide");
  }
});
