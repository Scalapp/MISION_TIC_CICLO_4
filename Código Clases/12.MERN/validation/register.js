const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Transforma los campos vacios en cadenas ""
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "El campo de nombre es requerido";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo de correo es requerido";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "El correo es inválido";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo de contraseña es requerido";
  } else if(!Validator.isLength(data.password, {min:6, max:30})){
    errors.password ="La contraseña debe tener mínimo 6 caracteres y máximo 30";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password = "La confirmación de contraseña es requerida";
  } else if(!Validator.equals(data.password, data.password2)){
    errors.password2="La contraseña y confirmación deben ser la misma";
  }
  return {errors, isValid: isEmpty(errors)};

};
