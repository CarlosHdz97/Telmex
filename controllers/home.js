const Recibos = require('../models').Recibo;
const User = require('../models').User;
module.exports = {
  show: function(req, res) {
    Recibos.findById(req.session.userId,{
      include:[
        {
          model:User,
          as: 'user'
        }
      ]
    }).then(function(recibo){
      res.render('home',{recibo})
    })
  }
};
