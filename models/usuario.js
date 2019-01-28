const db = require('../db');

//con esta forma exportamos una variable igualada a una fucnion


//BIEN
exports.getAll = (done) =>{
db.get().query('SELECT * FROM usuarios',(err,rows)=>{
    if(err) return done(err)
    done(null,rows);
    });
};

//BIEN
exports.insert = ({ email, contrasena, nombre, edad, municipio, provincia, postal, curso }, done) => {
    db.get().query('INSERT INTO usuarios VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)', [email, contrasena, nombre, edad, municipio, provincia, postal, curso], (err, result) => {
        if (err) return done(err, null)
        done(null, result)
    })
}
//BIEN
exports.checkLogin = (usuario, contrasena, done) =>{
    db.get().query('SELECT * FROM usuarios WHERE usuarios.username=? AND usuarios.password=?;', [usuario, contrasena],(err,rows)=>{
        if(err) return done(err)
        done(null,rows)
    })
   
};