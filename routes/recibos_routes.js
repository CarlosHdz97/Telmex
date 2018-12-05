const express = require('express');

let RecibosController =  require('../controllers/recibos');
let router = express.Router();

router.route('/recibo/:id').get(RecibosController.show);
router.route('/recibo').post(RecibosController.create);

module.exports = router;
