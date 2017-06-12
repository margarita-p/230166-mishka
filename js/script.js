var modalOpen = document.querySelector(".js-modal-open");
var modalSize = document.querySelector(".modal-size");
var modalClose = document.querySelector(".js-modal-close");
var modalOverlay = document.querySelector(".modal-overlay");

modalOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSize.classList.add("modal-show");
  modalOverlay.classList.add("modal-show");
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSize.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalSize.classList.contains("modal-show")) {
      modalSize.classList.remove("modal-show");
    }
    if (modalOverlay.classList.contains("modal-show")) {
      modalOverlay.classList.remove("modal-show");
    }
  }
});
