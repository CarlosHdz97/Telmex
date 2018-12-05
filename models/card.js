'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    numero_tarjeta: DataTypes.STRING,
    mm: DataTypes.INTEGER,
    aaaa: DataTypes.INTEGER,
    cvc: DataTypes.INTEGER,
    nombre_tarjeta: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
    Card.belongsTo(models.User,{
      as:'User'
    });
  };
  return Card;
};
