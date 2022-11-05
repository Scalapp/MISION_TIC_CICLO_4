
const app = require("express").Router();
const path=require('path');

app.use("/", (request, response)=>{
    
    request.sedFile(path.join('${__dirname}/src/html/index.html'));

})

module.exports = app;