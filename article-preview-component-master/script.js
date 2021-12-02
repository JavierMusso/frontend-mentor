let abrir = document.getElementById("cta");
let abrir2 = document.getElementById("cta2");
let modalC = document.getElementById("modalC");


abrir.addEventListener("click", () => {
  if (modalC.style.visibility == "visible") {
    modalC.style.visibility = "hidden";
    modalC.style.opacity = "0";
    abrir.style.backgroundColor = "hsl(210, 46%, 95%)";
  } else {
    modalC.style.visibility = "visible";
    modalC.style.opacity = "1";
    abrir.style.backgroundColor = "hsl(217, 19%, 35%)";
  }
});

abrir2.addEventListener('click', () => {
  modalC.style.visibility = "hidden";
  modalC.style.opacity = "0";
})
