const express = require('express');
const app = express();
const db = require('../DB/db');

//Mostrar en lista
app.get('/',(req,res)=>{
    //Consulta a la db
    const consulta = 'SELECT * FROM users';

    //Usamos la db para conectarnos a la base de datos
    db.query(consulta,(err,results)=>{
        if(err){
            console.error('No se encontro el usuario',err);
            res.send('Error comunicate con soporte');
        }else{
            res.render('index',{users:results});
        }
    });
});


//Agregar usuario
app.post('/add',(req,res)=>{
    const {nombre,email}=req.body;
    const insertarRegistroUsuarios = 'INSERT INTO users (nombre,email) VALUES (?,?)';
    db.query(insertarRegistroUsuarios,[nombre,email],(err,result)=>{
        if(err){
            console.error('No se inserto el registro',err);
        }else{
            res.redirect('/');
        }
    });

});

//Editar usuario

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const editar = 'SELECT * FROM users WHERE id = ?';

    db.query(editar, [id], (err, results) => {
      if (err) {
        console.error('Error al buscar usuario:', err);
        return res.send('Error en la base de datos');
      }
      //verifiacar si el ususario existe
      if (results.length === 0) {
        return res.send('Usuario no encontrado');
      }
  
    
      res.render('edit', { user: results[0] });
    });
  });
  

/*
app.get('/edit/:id',(req,res)=>{
    const {id} =req.params;
    const editar = 'Select * FROM users Where id = ?';
    db.query(editar,[id],(err,results)=>{
        if(err){
            console.error('Error',err);
        }else{
            res.render('edit',{user:results[0]});
        }       
    });
});
*/


//Update
app.post('/update/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre, email} = req.body;
    const actualizarUser='UPDATE users SET nombre = ?, email = ? WHERE id = ?';
    db.query(actualizarUser,[nombre,email,id],(err)=>{
        if(err){
            console.error("Sin actualizar usuario",err);
            res.send("Error de Update")
        }else{
            res.redirect('/');

        }
    });
});


//Elminar usuario
app.get('/delete/:id',(req,res)=>{
    const {id} = req.params;
    const eliminar = 'DELETE FROM users WHERE id = ?';
    db.query(eliminar,[id],(err)=>{
        if(err){
            console,error('Error en delete',err);
            res.send("Error en eliminar usuario");
        }else{
            res.redirect('/');
        }
    });
});

module.exports = app;