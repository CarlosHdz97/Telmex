const Recibos = require('../models').Recibo;
const User = require('../models').User;
module.exports = {
  create: function(req, res) {
    let data = {
      mes_facturacion: req.body.mes_facturacion,
      pagar_antes: req.body.pagar_antes,
      subtotal: req.body.subtotal,
      total: req.body.total,
      pagado: 0,
      userId: req.body.userId,
      folio:  Math.random() * (9999999999999999 - 1000000000000000) + 1000000000000000,
      facturaN: Math.random() * (9999999999999999 - 1000000000000000) + 1000000000000000
    };
    Recibos.create(data).then(result=>{
      res.json(result);
      }).catch(err=>{
        res.json(err);
    });
  },
  show: function(req, res) {
    Recibos.findById(req.params.id,{
      include:[
        {
          model:User,
          as: 'user'
        }
      ]
    }).then(function(recibo){
      res.render('recibo/show',{recibo})
    })
  }
};
