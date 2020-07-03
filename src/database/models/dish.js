'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    ispreparation: DataTypes.BOOLEAN
  }, {});
  Dish.associate = function(models) {
    Dish.hasMany(models.Ingredient, {as: 'ingredients'})
  };
  return Dish;
};