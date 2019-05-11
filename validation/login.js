const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  // Create an object to store all the errors.
  let errors = {};

  // Converty empty fields to empty strings
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;

  // Validate email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field required.";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid email";
  }

  // Validate password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};