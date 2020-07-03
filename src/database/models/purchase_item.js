'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchase_item = sequelize.define('Purchase_item', {
    purchase_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT,
    unity: DataTypes.STRING,
    product_quantity: DataTypes.FLOAT,
    product_unity: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Purchase_item.associate = function(models) {
    Purchase_item.belongsTo(models.Purchase, {foreignKey: 'purchase_id', as: 'purchase'})
    Purchase_item.belongsTo(models.Product, {foreignKey: 'product_id', as: 'product'})
  };
  return purchase_item;
};