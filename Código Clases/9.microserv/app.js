//Microservicios
//Diego Iván Oliveros Acosta
//Semana 5
const express =require('express');
const cors = require('cors');
const path = require('path');
const {json, urlencoded} = express;
const router = require("./src/routes");


const app = express();

const port =process.env.PORT || 3000;

app.use(json());   // decirle a la app que va a retornar un json 
app.use(urlencoded({extended:false})); //tener acceso a lo que venga en la url 

const corsOptions ={
    origin:'*',
    optionsSuccessStatus:200
}
 
app.use(cors(corsOptions));
app.use(router);
app.use('/home',(req,res)=>{
    res.sendFile(path.join(`${__dirname}/src/html/index.html`));
}
);

app.use('/e',(res, _res)=>{
    const a ="hola mundo";
    _res.send("Esto es un micro servicio en la versión v1.0.0",a);
});

app.listen(port, ()=>{
    console.log('El servidor de Diego está escuchando en el puerto',port);
});

