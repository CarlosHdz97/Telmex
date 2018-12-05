const User = require('../models').User;
module.exports = {
  create: function(req, res) {
    let data = {
      name: req.body.name,
      first_surname: req.body.first_surname,
      second_surname: req.body.second_surname,
      email: req.body.email,
      phone_number: req.body.phone_number,
      mobile_phone: req.body.mobile_phone,
      password: req.body.password,
      calle: req.body.calle,
      colonia: req.body.colonia,
      pais: req.body.pais,
      ciudad: req.body.ciudad,
      cp: req.body.cp
    };
    User.create(data).then(result=>{
      res.json(result);
      }).catch(err=>{
        res.json(err);
    });
  }
};
