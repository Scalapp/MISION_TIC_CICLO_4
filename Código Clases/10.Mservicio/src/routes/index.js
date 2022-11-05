const router = require('express').Router();

const helloRoute=require('./hello');
const calculadora=require('./calculadora');


router.use('/hello/', helloRoute);
router.use('/calculadora', calculadora);

module.exports= router;