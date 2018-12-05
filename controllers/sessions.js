const User = require('../models').User;
const bcrypt = require('bcrypt');
module.exports ={
  new: function(req, res){
    res.render('sessions/new');
  },
  create: function(req,res){
    User.login(req.body.phone_number, req.body.password)
        .then(user => {
          if(user){
            req.session.userId = user.id;
            req.session.phone_number = user.phone_number;
            res.redirect('/home');
          }else{
            console.log("Ingrese un usuario y contraseña válido");
            res.redirect('/sessions');
          }
        })
        .catch(err=>{
      console.log(err);
    })
  },
  edit:function(req,res){
    User.findById(req.session.userId).then(function(user){
      res.render('user/edit',{user})
    });
  },
  editPass:function(req,res){
    res.render('user/editPass');
  },
  updatePass:function(req,res){
    User.login(req.session.phone_number, req.body.password)
        .then(user => {
          if(user){
            bcrypt.hash(req.body.newPassword,10, function(error,hash){
              User.update({password_hash:hash},{
                where:{
                  id:req.session.userId
                }
              }).then(function(response){
                res.render('user/editPass',{message: {
                  title:"Su contraseña se cambio con éxito",
                  txt:"Ok",
                  icon:"success",
                  button:"Aceptar"
                }});
            })
            })
          }else{
            console.log("Su contraseña no es la correcta");
            res.render('user/editPass',{message: {
              title:"Su contraseña no es la correcta",
              txt:"Intentelo nuevamente",
              icon:"error",
              button:"Aceptar"
            }});
          }
        })
        .catch(err=>{
      console.log(err);
    })
  },
  update:function(req,res){
    User.update({
      name:req.body.name,
      first_surname:req.body.first_surname,
      second_surname:req.body.second_surname,
      mobile_phone:req.body.mobile_phone
    },{
      where:{
        id:req.session.userId
      }
    }).then(function(response){
      res.redirect("/home");
    })
  },
  destroy: function (req, res) {
    req.session.destroy(function () {
      res.redirect('/sessions');
    });
  }
};
