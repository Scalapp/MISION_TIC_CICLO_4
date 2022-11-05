const router = require("express").Router();

router.route("/").post((req, res) => {
    const x= "XXX valor sin mensaje XXX"; //creando un mensaje por defecto
    const y = req.body.name || x;
    const msg = " Respuesta post en el parámetro name: y ="+ y;
    res.json(msg);
  });

  router.route("/suma").post((req, res) => {
    const x=  req.body.operando1; //valores para la suma 
    const y = req.body.operando2;
    const suma = "El resularado de sumar ("+ x +" + " +y+ ") es: "+ (x+y);
    res.json(suma);
  });

  router.route("/resta").post((req, res) => {
    const x=  req.body.operando1; //valores para la resta 
    const y = req.body.operando2;
    const resta = "El resularado de restar ("+ x +" - " +y+ ") es: "+ (x-y);
    res.json(resta);
  });

  router.route("/div").post((req, res) => {
    const x=  req.body.numerador; //valores para la división 
    const y = req.body.denominador;
    const div = "El resularado de dividir ("+ x +" / " +y+ ") es: "+ (x/y);
    res.json(div);
  });



module.exports = router;