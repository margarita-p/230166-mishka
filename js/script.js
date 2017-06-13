var modalOpen = document.querySelector(".js-modal-open");
var modalSize = document.querySelector(".modal-size");
var modalClose = document.querySelector(".js-modal-close");

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
