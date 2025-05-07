const express = require('express');
const path = require ('path');

//Seleccionar el archivo routes.js en la carpeta routes
//Importar las rutas
const routes = require("./routes/routes");

const app = express();
const port= 3024;

//sirve paraestaticos en css, img, etc
app.use(express.static(path.join(__dirname,"public")));

app.use("/",routes);

app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});


