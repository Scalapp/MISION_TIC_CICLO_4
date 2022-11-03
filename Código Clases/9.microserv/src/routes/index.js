//Microservicios
//Diego Iván Oliveros Acosta
//Semana 5

const router = require("express").Router();

const helloRoute =require("./hello");

router.use('/hello', helloRoute);
module.exports= router;