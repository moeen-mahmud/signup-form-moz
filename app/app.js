/**
 * Global variables
 */
const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const passRetype = document.getElementById("pass-retype");

/**
 * Event handler for submitting the form
 */
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
  if (form.checkValidity() === true) {
    clearFields();
  }
});

/**
 * Function for checking the inputs
 */
const checkInputs = () => {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const userNameValue = userName.value;
  const userEmailValue = userEmail.value;
  const userPassValue = userPass.value;
  const passRetypeValue = passRetype.value;

  // Check the first name
  if (firstNameValue === "") {
    setErrorFor(firstName, "First name cannot be empty!");
  } else {
    setSuccessFor(firstName);
  }

  // Check the last name
  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }

  // Validating the username
  if (!isUserName(userNameValue)) {
    setErrorFor(userName, "Enter a valid username!");
  } else {
    setSuccessFor(userName);
  }

  // Validating the user email
  if (!isMail(userEmailValue)) {
    setErrorFor(userEmail, "Looks like this is not an email!");
  } else {
    setSuccessFor(userEmail);
  }

  // Validating the user password
  if (!isPass(userPassValue)) {
    setErrorFor(userPass, "Please enter a valid password");
  } else {
    setSuccessFor(userPass);
  }

  // Check whether the retype password is correct
  if (userPassValue !== passRetypeValue || passRetypeValue === "") {
    setErrorFor(passRetype, "Password doesn't match!");
  } else {
    setSuccessFor(passRetype);
  }
};

/**
 * Function for showing the error message
 * @param {variable} input
 * @param {string} message
 */
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.classList.add("error-msg");
  small.innerText = message;
  input.classList.add("input-error");
  input.classList.remove("input-success");
};

/**
 * Function for showing the success state
 * @param {variable} input
 */
const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.classList.remove("error-msg");
  small.innerText = "";
  input.classList.add("input-success");
  input.classList.remove("input-error");
};

/**
 * Function that checks the validity of the username
 * @param {variable} userName
 * @returns {boolean} either true or false after testing
 */
const isUserName = (userName) => {
  return /^[A-Za-z]\w+[A-Za-z0-9]{4,25}$/.test(userName);
};

/**
 * Function for validating the user email
 * @param {variable} userEmail
 * @returns {boolean} either true or false after testing
 */
const isMail = (userEmail) => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    userEmail
  );
};

/**
 * Function for validating the user password
 * @param {variable} userPass
 * @returns {boolean} either true or false after testing
 */
const isPass = (userPass) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    userPass
  );
};

/**
 * Function for clearing the input fields and show the success message
 */
const clearFields = () => {
  firstName.value = "";
  lastName.value = "";
  userName.value = "";
  userEmail.value = "";
  userPass.value = "";
  passRetype.value = "";
};
