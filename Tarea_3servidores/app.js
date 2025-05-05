//importar express
const express=require('express');

//Generar instancia
const app=express();

//Definición de puerto
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hola mundo desde el puerto 3000");
})
console.log(`Servidor en escucha desde http://127.0.0.1:${port}`);
app.listen(port);
