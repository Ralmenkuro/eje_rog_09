const { response } = require("express");
const express =require("express");
const app = express(); //responder solicitudes chrome 
const port = process.env.PORT || 3000; //Para cuando realizemos en deploy  
// obtener un recurso del servidor 
app.get("/",(request,response)=>{
res.send("Hola. Este es un servidor en node")
})

app.get("/productos",(request,response)=>{
    res.send("Esta seria la pag de productos ")
})

app.get("*",(request,response)=>{
    res.send("404 | no encontrada :d")
})

app.listen(port,()=>{
    
})

