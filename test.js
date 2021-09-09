const str = "mojo_jojo";

function userValidation(str) {
  const userValidationReg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  const userValidationLength = (str) => str.length >= 4 && str.length <= 25;
  return userValidationReg.test(str) && userValidationLength(str);
}

console.log(userValidation(str));
