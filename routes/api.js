var express = require('express');
var router = express.Router();

const usuariosApiRouter = require('./api/usuarios');
const partidasApiRouter = require('./api/partidas');
router.use('/usuarios',usuariosApiRouter);
router.use('/partidas',partidasApiRouter);


module.exports = router;