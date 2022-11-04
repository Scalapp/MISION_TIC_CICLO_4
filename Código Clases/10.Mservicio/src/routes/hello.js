const router = require("express").Router();

router.route("/").get((req, res) => {
  const entrada = "Esto debe ser reemplazado por la variable de request";
  const salida = req.query.name || entrada;
  const msg = "hola mundo desde hello 2 y la variable o salida es: " + salida;
  res.json(msg);
});

router.route("/:lenguaje").get((req, res) => {
  var mensaje = req.params.lenguaje;

  switch (mensaje) {
    case "es":
      mensaje = "¡Hola mundo!";
      break;
    case "fr":
      mensaje = "salut monde";
      break;
      case "en":
        mensaje = "Hello World!";
        break;  
    case "ru":
      mensaje = "Привет, мир";
      break;
    case "ara":
      mensaje = "مرحبا بالعالم";
      break;
    default:
      mensaje = "¡No ha enviado una URl válida!";
  }

  res.json(mensaje);
});



module.exports = router;
