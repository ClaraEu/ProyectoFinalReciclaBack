const mysql = require('mysql');

let pool = null;

// exports.connect = (done) => {
//     pool=mysql.createPool({
//         host:'localhost',
//         user:'root',
//         password:'root',
//         database: 'proyecto_recicla',
//         port:8889
//     })
//     if(pool !== null){
//         done(null);
//     } else{
//         done('No se ha podido conectar');
//     }
   
// }

exports.connect = (done) => {
    pool=mysql.createPool({
        host:'us-cdbr-iron-east-01.cleardb.net',
        user:'b0af5ccdcaabd6',
        password:'effe3639',
        database: 'heroku_797fd608b27195c'
    })
    if(pool !== null){
        done(null);
    } else{
        done('No se ha podido conectar');
    }
   
}


exports.get = () =>{
    return pool;
}

//mysql://b0af5ccdcaabd6:effe3639@us-cdbr-iron-east-01.cleardb.net/heroku_797fd608b27195c?reconnect=true