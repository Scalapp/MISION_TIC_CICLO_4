const router =require("express").Router();

router.route('/').get((req, res)=>{
    const entrada="Esto debe ser reemplazado por la variable de request"
    const salida =req.query.name||entrada
    const msg ="hola mundo desde hello 2 y la variable o salida es: "+salida;
    res.json(msg);
});

module.exports = router;