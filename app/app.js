const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const passRetype = document.getElementById("pass-retype");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
  if (checkValidity() === true) {
    clearFields();
  }
});

const checkInputs = () => {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const userNameValue = userName.value;
  const userEmailValue = userEmail.value;
  const userPassValue = userPass.value;
  const passRetypeValue = passRetype.value;

  if (firstNameValue === "") {
    setErrorFor(firstName, "First name cannot be empty!");
  } else {
    setSuccessFor(firstName);
  }
  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }
  if (!isUserName(userNameValue)) {
    setErrorFor(
      userName,
      "Username should be between 4 to 25 characters long, must start with a letter, it only accepts letters, numbers and undrescore character but cannot end with an underscore character"
    );
  } else {
    setSuccessFor(userName);
  }
  if (!isMail(userEmailValue)) {
    setErrorFor(userEmail, "Looks like this is not an email!");
  } else {
    setSuccessFor(userEmail);
  }
  if (!isPass(userPassValue)) {
    setErrorFor(userPass);
  } else {
    setSuccessFor(userPass);
  }
  if (userPassValue !== passRetypeValue) {
    setErrorFor(passRetype);
  } else {
    setSuccessFor(passRetype);
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.classList.add("error-msg");
  small.innerText = message;
  input.classList.add("input-error");
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.classList.remove("error-msg");
  small.innerText = "";
  input.classList.add("input-success");
};

const clearFields = () => {
  firstName.value = "";
  lastName.value = "";
  userName.value = "";
  userEmail.value = "";
  userPass.value = "";
  passRetype.value = "";
};
