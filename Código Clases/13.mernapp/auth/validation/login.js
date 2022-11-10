const Validator = require("validator");
const isEmpty = require("is-empty");

module.expoert = function validateLoginInput(data) {
  let errors = {};

  //Si el campo está vacio, retornamos una cadena vacia.
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // verificar el correo:

  if (Validator.isEmpty(data.email)) {
    errors.email = "Debe ingresar un correo";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "El correo ingresado es invalido";
  }

  // verificar el contraseña:

  if (Validator.isEmpty(data.password)) {
    errors.password = "Debe ingresar una contraseña";
  } else if (!Validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "La contraseña debe tener entre 6 y 20 caracteres";
  }
  return { errors, isValid: isEmpty(errors) };
};
