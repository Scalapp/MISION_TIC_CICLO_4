const express =require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
//const passport = require('passport');
//const users =require("./routes/api/users");

const app = express();

//software intermedio: 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Configuración de la base de datos:
const db = require("./config/keys").mongoURI;

//conección a la base de datos
mongoose.connect(db, {useNewUrlParser:true})
.then(()=>{console.log("Concección exitosa a la base de datos")})
.catch((err)=>console.log(err));

//sofware intrermedio passport
//app.use(passport.initialize());

//Configuración passport

//require("./config/passport")(passport);

//Routes
//app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`El servidor está corriendo en el puerto: ${port}`));







