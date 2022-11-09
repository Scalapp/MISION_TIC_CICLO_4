const express =require("express");
const router = express.Router();
const bcrypt =require("bcryptjs");
const jwt= require("jsonwebtoken");
const keys = require("../../config/keys");
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");
const User = require("../../models/user");

router.post("/registo", (req, rep)=>{
//Validación del registro 
//Desestructurar el objeto que recibimos de la validación 
const {error, isValid} =validateRegisterInput(req.body);
if (!isValid){
    return res.status(400).json(errors);
}
User.findOne({email: req.body.email})
.then(user=>{
    if(user){
        return res.status(400).json ({email:"El correo ya existe"});
    }
    else{
        const newUser= new User({
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password 
        });
    }
    //cifrar la contraseña antes de guardar:
    bcript.genSalt(10, (err, salt)=>{
        bcript.hash(newUser.password, salt, (err,hash)=>{
            if(err) throw err;
            newUser.password =hash;
            newUser.save()
            .then (user=res.json(user))
            .catch (err =console.log (err));            
        });
    });
});
});

router.post("/login", (req, res)=>{
// Validación del formulario
// Desestructurar el objeto de la petición
const {errors, isValid} =validateLoginInput(req.body);

//Verificar el formulario
if(!isValid){
    return res.status().json(erros);
}
const email = req.body.email;
const password = req.body.password;

// Encontrar el usuario por correo
User.findOne({email}).then (
    // Verificar que el usuario existe 
    user =>{
        if(!user){
            return res.status().json({emailnotfound:"correo no encontrado"});
        }
    }

    // Vericar la contraseña 
   // bcrypt.compare(password, user.password).then(isMatch =>{})
)






})

