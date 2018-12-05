const express = require('express');

let TarjetasController =  require('../controllers/tarjeta');
let router = express.Router();

router.route('/formaPago').get(TarjetasController.show).post(TarjetasController.create);

module.exports = router;
