var express = require('express');
var router = express.Router();
let usuarioModel = require('../../models/usuario');

router.get('/:tipo',(req,res)=>{
    usuarioModel.getAll((err,rows) =>{
        console.log(err);
        if (req.params.tipo === 'html') {
            res.render('usuarios/main',{
                arrUsuarios: rows
            })
        } else {
            res.json(rows)
        }
    });
});
//aqui recogemos los datos que hemos enviado desde la parte front de angular
router.post('/json',(req,res)=>{
    console.log("JSON", req.body);
    usuarioModel.insert(req.body,(err,result)=>{
        console.log(result);
        if(err) return res.json({error: err.message})
    });
   
});

//aqui vamos a recoger los datos con los que el usuario ha intentado loguearse
router.post('/login',(req,res)=>{
    console.log("LOGIN", req.body);
    usuarioModel.checkLogin(req.body.usuario, req.body.contrasena,(err,result)=>{
        if(err) {
            return res.json({error: err.message})
        }
        console.log(result);
        if (result.length === 0) {
            return res.json({error: 'Usuario o contraseña incorrectos'})
        } else {
            return res.json(result[0])
        }
        
    });
});



module.exports = router;