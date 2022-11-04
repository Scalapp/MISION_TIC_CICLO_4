const router = require("express").Router();

router.route("/").get((req, res) => {
  const msg = "Hola esto es un mensaje desde otro componente";
  res.json(msg);
});

router.route("/:lenguaje").get((reg, res) => {
  switch (reg.params.lenguaje) {
    case "es":
      mensaje = "¡Hola mundo!";
      break;
    case "en":
      mensaje = "¡Hello World!";
      break;
    case "fr":
      mensaje ="Salut monde!";
      break;
    case "ru":
      mensaje = "Привет, мир";
      break;
    case "ara":
      mensaje ="مرحبا بالعالم";
      break;

    default:
      mensaje = "No es un idioma válido!";
  }
  res.json(mensaje);
});


module.exports = router;
