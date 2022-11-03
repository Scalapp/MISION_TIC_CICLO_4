//Microservicio 1
const express =require('express');
const cors = require('cors');
const router = require("./src/routes")

//Configuración de M servicio
const app =express();
const port = 8080 || process.env.PORT;
const corsOptions ={
    origin: '*',
    OptionsSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(router);

app.use('/b', (rep, res)=>{
    res.send("Esto es mi primer micro servicio, realicé una  y otra modificación: Micro servicio v 1.0.0");
});

app.listen(port, ()=>{
    console.log("El servidor está escuchando en el puerto: ", port)
});
