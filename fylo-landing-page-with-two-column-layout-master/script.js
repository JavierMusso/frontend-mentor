const topForm = document.getElementById("top-form");
const topEmail = document.getElementById("top-email");
const botForm = document.getElementById("bot-form");
const botEmail = document.getElementById("bot-email");

topForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let topEmailVal = topEmail.value;

  if (!validateEmail(topEmailVal)) {
    topForm.classList.add("top-error");
  } else {
    topForm.classList.remove("top-error");
  }
});

botForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let botEmailVal = botEmail.value;

  if (!validateEmail(botEmailVal)) {
    botForm.classList.add("bot-error");
  } else {
    botForm.classList.remove("bot-error");
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
