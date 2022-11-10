const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");
const User = require("../../models/user");
const passport = require("passport");

router.post("/registro", (req, res) => {
  //Validación de formulario
  const { errors, isvalid } = validateRegisterInput(req.body);
  if (!isvalid) {
    return res.status(400).json(errors);
  }
  //Si el formulario es válido, proceder a registro
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "El correo de usuario ya existe" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  //Validación del formulario de inicio:
  //desestructurar objeto de validación
  const { errors, isvalid } = validateLoginInput(req.body);
  //verificar la validación:
  if (!isvalid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    //verificar usuario
    if (!user) {
      return res.status(400).json({ emailnotfount: "El correo es invalido" });
    }
    //verificar contraseña
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 31556926 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer" + token
            });
          }
        );
      }
      else {
        return res.status(400).json({passwordIncorrect: "Usuario o contraseña invalidos"});
      }
    });
  });
});

module.exports = router;
