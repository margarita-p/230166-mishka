var modalOpen = document.querySelector(".js-modal-open");
var modalSize = document.querySelector(".modal-size");
var modalClose = document.querySelector(".js-modal-close");

var menuToggle = document.querySelector(".hamburger");
var menu = document.querySelector(".main-nav");



modalOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSize.classList.add("modal-size--show");
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSize.classList.remove("modal-size--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalSize.classList.contains("modal-size--show")) {
      modalSize.classList.remove("modal-size--how");
    }
  }
});



document.addEventListener("DOMContentLoaded", function(evt) {
  evt.preventDefault();
  if(menu.classList.contains("main-nav--no-js")) {
    menu.classList.remove("main-nav--no-js");
  }
  if (menuToggle.classList.contains("hamburger--no-js")) {
    menuToggle.classList.remove("hamburger--no-js");
  }
});

menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!menu.classList.contains("main-nav--show")) {
    menu.classList.add("main-nav--show");
    menuToggle.classList.add("hamburger--close");
  }
  else {
    menu.classList.remove("main-nav--show");
    menuToggle.classList.remove("hamburger--close");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (menu.classList.contains("main-nav--show")) {
      menu.classList.remove("main-nav--show");
    }
  }
});
