'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      first_surname: {
        type: Sequelize.STRING
      },
      second_surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.BIGINT,
        unique:true,
        allowNull: false
      },
      mobile_phone: {
        type: Sequelize.BIGINT
      },
      calle: {
        type: Sequelize.STRING
      },
      colonia: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      cp: {
        type: Sequelize.STRING
      },
      password_hash: {
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
    return queryInterface.dropTable('Users');
  }
};
