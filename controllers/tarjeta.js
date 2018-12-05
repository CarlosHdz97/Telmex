const Cards = require('../models').Card;
const User = require('../models').User;
module.exports = {
  create: function(req, res) {
    let data = {
      numero_tarjeta: req.body.numero_tarjeta,
      mm:req.body.mm,
      aaaa:req.body.aaaa,
      cvc:req.body.cvc,
      nombre_tarjeta:req.body.nombre_tarjeta
      userId: session.userId
    };
    Cards.create(data).then(result=>{
      res.redirect('/formaPago');
      }).catch(err=>{
        res.json(err);
    });
  },
  show: function(req, res) {
    Cards.findById(req.params.id,{
      include:[
        {
          model:User,
          as: 'user'
        }
      ]
    }).then(function(card){
      res.render('card/show',{card})
    })
  }
};
