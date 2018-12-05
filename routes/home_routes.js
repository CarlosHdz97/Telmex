const express = require('express');

let HomeController =  require('../controllers/home');
let router = express.Router();

router.route('/home').get(HomeController.show);

module.exports = router;
