//crear el servidor
const express = require("express");
const app = express();
const port = procces.emv.PORT || 3000;


app.use(express.static('public')); //para que busque el index
//configuraciones

app.get("/",(req,res)=>{
    res.send('En teoria es el index.html');
});
app.get("*",(req,res)=>{
    res.send('404 | Pagina no encontrada.html');
});

//Proceso
app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto", port);
});

