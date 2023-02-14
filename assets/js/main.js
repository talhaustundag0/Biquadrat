const modalBtn = document.querySelectorAll(".btn-modal");
const modal = document.querySelector(".modal-form");
const closeBtn = document.getElementById("close-btn")

modalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.remove("d-none");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("d-none");
});



