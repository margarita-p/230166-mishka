var modalOpen = document.querySelector(".js-modal-open");
var modalSize = document.querySelector(".modal-size");
var modalClose = document.querySelector(".js-modal-close");

// var menuOpen = document.querySelector(".page-header__hamburger");
// var menu = document.querySelector(".main-nav");
// var menuNoJs = document.querySelector(".main-nav__no-js");

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


// menu.addEventListener("DOMContentLoaded", function(evt) {
//   if (menu.classList.contains("main-nav__no-js")) {
//     (menu.classList.remove("main-nav__no-js"));
//   }
// })
//
//
// menuOpen.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   if (!menu.classList.contains("main-nav__show")) {
//     menu.classList.add("main-nav__show");
//   }
//   else {
//     menu.classList.remove("main-nav__show");
//   }
// });
