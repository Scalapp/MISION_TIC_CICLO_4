const router =require("express").Router();

router.route('/hello2').get((req, res)=>{
    const msg ="hola mundo desde hello 2";
    res.json(msg);
});

module.exports = router;