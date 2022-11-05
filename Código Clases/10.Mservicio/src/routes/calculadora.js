const router = require("express").Router();

router.route("/div").post((request, response) => {
  const div = request.body.numerador / request.body.denominador;

  const a = "El resultado de la división es: "+div;
  response.json(a);
});

router.route("/sum").post((request, response) => {
    const sum = request.body.numerador + request.body.denominador;
  
    const a = "El resultado de la suma es: "+sum;
    response.json(a);
  });

module.exports = router;
