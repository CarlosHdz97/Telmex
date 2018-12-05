const Cards = require('../models').Card;
const User = require('../models').User;
module.exports = {
  create: function(req, res) {
    let data = {
      numero_tarjeta: req.body.numero_tarjeta,
      mm:req.body.mm,
      aaaa:req.body.aaaa,
      cvc:req.body.cvc,
      nombre_tarjeta:req.body.nombre_tarjeta,
      userId: req.session.userId
    };
    Cards.create(data).then(result=>{
      if(result){
        res.render('card/show',{message: {
          title:"Registro exitoso",
          txt:"la tarjeta se registro",
          icon:"success",
          button:"Aceptar"
        }});
      }else{
        res.render('card/show',{message: {
          title:"Usuario o contraseña incorrecta",
          txt:"Intentelo nuevamente",
          icon:"error",
          button:"Aceptar"
        }});
      }
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
