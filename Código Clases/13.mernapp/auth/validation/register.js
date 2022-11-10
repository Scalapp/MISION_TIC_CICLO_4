const Validator =require("validator");
const isEmpty =require("is-empty");

module.expoert =function validateRegisterInput(data){
let errors ={};
//Si el campo está vacio, retornamos una cadena vacia.
data.name = !isEmpty(data.name) ? data.name: "";
data.email = !isEmpty(data.email) ? data.email: "";
data.password = !isEmpty(data.password) ? data.password: "";
data.password2 = !isEmpty(data.password2) ? data.password2: "";

// verificar el nombre:

if(Validator.isEmpty(data.name)){
    errors.name ="Debe ingresar un nombre";
}
// verificar el correo:

if(Validator.isEmpty(data.email)){
    errors.email ="Debe ingresar un correo";
} else if (!Validator.isEmail(data.email)){ 
    errors.email ="El correo ingresado es invalido";
}

// verificar el contraseña:

if(Validator.isEmpty(data.password)){
    errors.password ="Debe ingresar una contraseña";
} else if (!Validator.isLength(data.password, {min: 6, max:20})){
    errors.password = "La contraseña debe tener entre 6 y 20 caracteres";
}

// verificar el contraseña de confirmación:

if(Validator.isEmpty(data.password2)){
    errors.password2 ="Debe ingresar una contraseña de confirmación ";
} else if(!Validator.equals(data.password, data.password2)){
    errors.password2 ="Las contraseñas no cohinciden";
    
}
return {errors, isValid: isEmpty(errors)};

};