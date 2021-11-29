const form = document.getElementById("form");

const inputName = document.getElementById("inputName");
const inputSurname = document.getElementById("inputSurname");
const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");

const divName = document.getElementById("divName");
const divSurname = document.getElementById("divSurname");
const divEmail = document.getElementById("divEmail");
const divPass = document.getElementById("divPass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameVal = inputName.value;
  let surnameVal = inputSurname.value;
  let emailVal = inputEmail.value;
  let passVal = inputPass.value;
  let count = 0;

  if (nameVal == "") {
    divName.classList.add("error");
  } else {
    divName.classList.remove("error");
    count++;
  }

  if (surnameVal == "") {
    divSurname.classList.add("error");
  } else {
    divSurname.classList.remove("error");
    count++;
  }

  if (!validateEmail(emailVal)) {
    divEmail.classList.add("error");
  } else {
    divEmail.classList.remove("error");
    count++;
  }

  if (passVal == "") {
    divPass.classList.add("error");
  } else {
    divPass.classList.remove("error");
    count++;
  }

  if (count == 4) {
    window.alert(
      "Nombre: " +
        nameVal +
        "\nApellido: " +
        surnameVal +
        "\nEmail: " +
        emailVal +
        "\nPassword: " +
        passVal
    );
  }
});

inputName.addEventListener("click", checkInputs);

inputSurname.addEventListener("click", checkInputs);

inputEmail.addEventListener("click", checkInputs);

inputPass.addEventListener("click", checkInputs);

function checkInputs() {
  let nameVal = inputName.value;
  let surnameVal = inputSurname.value;
  let emailVal = inputEmail.value;
  let passVal = inputPass.value;

  if (nameVal == "") {
    divName.classList.remove("error");
  }

  if (surnameVal == "") {
    divSurname.classList.remove("error");
  }

  if (emailVal == "") {
    divEmail.classList.remove("error");
  }

  if (passVal == "") {
    divPass.classList.remove("error");
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
