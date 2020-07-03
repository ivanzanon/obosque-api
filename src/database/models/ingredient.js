'use strict';

const product = require("./product");

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
    dish_id: DataTypes.INTEGER,
    preparation_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT,
    unity: DataTypes.STRING
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsToMany(models.Dish, {foreignKey: 'dish_id', as: 'dish'})
    Ingredient.belongsTo(models.Product, {foreignKey: 'product_id', as: 'product'})
    Ingredient.belongsTo(models.Dish, {foreignKey: 'preparation_id', as: 'preparation'})
  };
  return Ingredient;
};