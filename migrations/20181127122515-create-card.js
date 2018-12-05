'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_tarjeta: {
        type: Sequelize.STRING
      },
      mm: {
        type: Sequelize.INTEGER
      },
      aaaa: {
        type: Sequelize.INTEGER
      },
      cvc: {
        type: Sequelize.INTEGER
      },
      nombre_tarjeta: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cards');
  }
};