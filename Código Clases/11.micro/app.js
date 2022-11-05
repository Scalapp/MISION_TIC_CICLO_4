const express =require('express');
const cors = require('cors');
const router =require("./src/routes")
const {json, urlencoded} = express;
const path=require('path');


//creación y configuración 
const app =express();
const port =process.env.PORT || 3000;

app.use(json());   // decirle a la app que va a retornar un json 
app.use(urlencoded({extended:false})); //tener acceso a lo que venga en la url 
const corsOptions ={
    origin:'*',
    OptionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(router);

//app.use('/', función );
app.use('/app', (peti, resp)=>{
    const firtString="Cadena inicial";
    const string=peti.query.valor||firtString; 
    resp.send("Hola, esto es mi "+"segundo"+
    " micro servicio, y este es el mensaje en la petición ["+string+"] bye!");
});


app.use('/d', (req, resp)=>{
    
    resp.send("Hola, esto es mi primer microservicio, bye!");
});

app.listen(port,()=>{
    console.log("El servidor está escuchando atentamente en el puerto",port)
});



app.use("/home", (request, response)=>{
    
    response.sendFile(path.join(`${__dirname}/src/html/index.html`));

});