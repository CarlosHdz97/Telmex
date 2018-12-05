'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recibo = sequelize.define('Recibo', {
    mes_facturacion: DataTypes.STRING,
    pagar_antes: DataTypes.STRING,
    subtotal: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    pagado: DataTypes.BOOLEAN,
    folio: DataTypes.STRING,
    facturaN: DataTypes.STRING
  }, {});
  Recibo.associate = function(models) {
    // associations can be defined here
    Recibo.belongsTo(models.User,{
      as:'user'
    });
  };
  return Recibo;
};
