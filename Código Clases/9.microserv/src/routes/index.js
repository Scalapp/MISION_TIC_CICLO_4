//Microservicios
//Diego Iván Oliveros Acosta
//Semana 5

const router = require("express").Router();

const helloRoute =require("./hello");

router.use('/hola', helloRoute);
module.exports= router;