const express = require('express');
const rutas2 = require("./routes/index4");

//instanciamos express
const app = express();

//configuracion del server uso de rutas
app.use("/",rutas2);

//puerto
const port= 1230;

//Escucha del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});