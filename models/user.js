'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    first_surname: DataTypes.STRING,
    second_surname: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    phone_number: {
      type:DataTypes.BIGINT,
      unique:true,
      allowNull:false
    },
    mobile_phone: DataTypes.BIGINT,
    calle: DataTypes.STRING,
    colonia: DataTypes.STRING,
    pais: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    cp: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {});

  User.login = function(phone_number, password){
    //buscar al usuario
    return User.findOne({
      where:{
        phone_number:phone_number
      }
    }).then(user=>{
      if(!user) return null;
      return user.authenticatePassword(password).then(valid=> valid ? user :null);
    });
  };

  User.prototype.authenticatePassword = function(password){
    return new Promise((res,rej)=>{
      bcrypt.compare(password,this.password_hash,function(err,valid){
        if(err) return rej(err);
        res(valid);
      })
    })
  }
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Recibo,{
      as:'recibos'
    });
    User.hasMany(models.Card,{
      as:'cards'
    });
  };
  User.beforeCreate(function(user,options){
    return new Promise((res,rej)=>{
      if (user.password) {
        bcrypt.hash(user.password,10, function(error,hash){
          user.password_hash = hash;
          res();
        })
      };
    })
  });
  return User;
};
