const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".open-button");
const iconCloseModal = document.querySelector(".modal__header i");
const closeModalButton = document.querySelector(".modal__footer .close-button");

function toogleModal(){
    modal.classList.toggle("hide");
}

openModalButton.addEventListener("click", toogleModal);
iconCloseModal.addEventListener("click", toogleModal);
closeModalButton.addEventListener("click", toogleModal);


modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toogleModal();
});