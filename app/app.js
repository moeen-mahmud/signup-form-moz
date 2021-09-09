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
  if (form.checkValidity() === true) {
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
    setErrorFor(userName, "Enter a valid username!");
  } else {
    setSuccessFor(userName);
  }
  if (!isMail(userEmailValue)) {
    setErrorFor(userEmail, "Looks like this is not an email!");
  } else {
    setSuccessFor(userEmail);
  }
  if (!isPass(userPassValue)) {
    setErrorFor(userPass, "Please enter a valid password");
  } else {
    setSuccessFor(userPass);
  }
  if (userPassValue !== passRetypeValue) {
    setErrorFor(passRetype, "Password doesn't match!");
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
  input.classList.remove("input-success");
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.classList.remove("error-msg");
  small.innerText = "";
  input.classList.add("input-success");
  input.classList.remove("input-error");
};

const userInfo = () => {};

const isUserName = (userName) => {
  return /^[A-Za-z]\w+[A-Za-z0-9]{4,25}$/.test(userName);
};

const isMail = (userEmail) => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    userEmail
  );
};

const isPass = (userPass) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    userPass
  );
};

const clearFields = () => {
  firstName.value = "";
  lastName.value = "";
  userName.value = "";
  userEmail.value = "";
  userPass.value = "";
  passRetype.value = "";
};
