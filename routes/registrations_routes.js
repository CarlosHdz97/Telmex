const express = require('express');

let RegistrationsController =  require('../controllers/registrations');
let router = express.Router();

router.route('/users').post(RegistrationsController.create);

module.exports = router;
