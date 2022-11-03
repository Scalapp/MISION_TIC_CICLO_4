//Microservicios
//Diego Iván Oliveros Acosta
//Semana 5
const router = require("express").Router();

router.route("/").get((reg, res) => {
  const a = " hola mundo";
  const b = reg.query.name || a;
  //const b= reg.query.name||"hola mundo 2";
  msg =
    "Hola esto es un mensaje del componente hello y tiene nombre: " +
    b +
    " y se procesa en un get request";
  res.json(msg);
});

router.route("/:lenguaje").get((reg, res) => {
  switch (reg.params.lenguaje) {
    case "es":
      msg = "¡Hola mundo!";
      break;
    case "en":
      msg = "Hello World!";
      break;
    case "fr":
      msg = "Salut monde!";
      break;
    case "ru":
      msg = "Привет, мир!";
      break;
    default:
      msg = "مرحبا بالعالم!";
  }

  res.json(msg);
});



router.route("/div").post((_req, _res) => {
    const x = "XXXX SIN MENSAJE XXXXX";
    const y =  _req.body.numerador /_req.body.denominador;
    msg = "El resultado de la división es: " + y+ " hasta pronto";
    _res.json(msg);
  });
  
  router.route("/").post((_req, _res) => {
    const x = "XXXX SIN MENSAJE XXXXX";
    const y =  _req.body.name || x;
    msg = "Hola " + y+ " Esto es el contenido de name desde un post";
    _res.json(msg);
  });

  module.exports = router;

