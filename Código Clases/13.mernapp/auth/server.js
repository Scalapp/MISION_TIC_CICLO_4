const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();

//body-parser software intermedio middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuración de la base de datos
const db = require("./config/keys").mongoURI;

//conección a la db
mongoose.connect(db,{useNewUrlParser:true}) 
    .then (()=>{console.log("la base de datos ha sido conectada exitosamente!")}) 
        .catch ((err)=>{console.log(err)});

//passport config
app.use(passport.initialize());
require("./passport")(passport);
//Rutas 
app.use("./routes/api/users", users);
const port =process.env.PORT || 5000;
app.listen(port, ()=> console.log(`El servidor está activo en el puerto:${port}`));


