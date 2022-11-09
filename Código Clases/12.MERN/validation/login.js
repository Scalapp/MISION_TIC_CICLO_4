const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports= function validateLoginInput(data){
let errors ={};

data.email = !isEmpty(data.email)? data.email :"";
data.password = !isEmpty(data.password)? data.password :"";


//verificación de correo:
if (Validator.isEmpty(data.email)) {
    errors.email = "El campo de correo es requerido!";
  } else if(!Validator.isEmail(data.email)){
    errors.email="El correo es inválido";
  }
 //Verificación de contraseña 
 if (Validator.isEmpty(data.password)) {
    errors.password = "El campo de contraseña es requerido!";
  }
  return {
    errors, 
    isValid: isEmpty(errors)
  };
};