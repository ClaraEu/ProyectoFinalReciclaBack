const db = require('../db');

//con esta forma exportamos una variable igualada a una fucnion

//LA SENTENCIA MYSQL SE RENDERIZA BIEN
exports.getAll = (done) =>{
db.get().query('SELECT u.username,g.nombre,ug.puntuacion,ug.fecha FROM juegan as ug INNER JOIN usuarios as u ON ug.fk_hijos=u.id INNER JOIN juegos as g ON ug.fk_juegos=g.id;',(err,rows)=>{
    if(err) return done(err)
    done(null,rows);
    });
};

//INTENTAMOS INSERTAR PARTIDAS CON PUNTUACION
exports.insert = ({ puntos, id_usuario, id_juego }, done) => {
    db.get().query('INSERT INTO juegan VALUES (null, ?, ?, ?, ?)', [puntos, Date.now(),id_usuario, id_juego], (err, result) => {
        if (err) return done(err, null)
        done(null, result)
    })
}