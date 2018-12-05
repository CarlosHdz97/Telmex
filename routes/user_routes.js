const express = require('express');

let SessionsController =  require('../controllers/sessions');
let router = express.Router();


router.route('/user').get(SessionsController.edit).put(SessionsController.update);
router.route('/user/password').get(SessionsController.editPass).put(SessionsController.updatePass);
module.exports = router;
