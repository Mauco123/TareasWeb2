const express = require('express');
const router = express.Router();
const path = require('path');

//defincion de las rutas y menejadores

router.get("/",(req,res)=>{
    //res.send("Hola mundo");
    res.sendFile(path.join(__dirname+"/../cuartoserver.html"));
});


module.exports=router;

