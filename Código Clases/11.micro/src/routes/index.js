const router =require('express').Router();
const calcular =require('./calculadora');
const holaIndex =require('./hola');



router.use('/calculadora',calcular);
router.use('/inicio',holaIndex);


module.exports = router;