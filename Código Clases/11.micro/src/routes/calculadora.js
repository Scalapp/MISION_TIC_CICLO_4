const router = require("express").Router();

router.route("/").post((req, res) => {
    const x= "XXX valor sin mensaje XXX";
    const y = req.body.name;
    const msg = " Respuesta post: y ="+ y;
    res.json(msg);
  });

module.exports = router;