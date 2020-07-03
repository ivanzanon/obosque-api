'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('purchase_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      purchase_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Purchases',
          key: 'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Priducts',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      unity: {
        type: Sequelize.STRING
      },
      product_quantity: {
        type: Sequelize.FLOAT
      },
      product_unity: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('purchase_items');
  }
};