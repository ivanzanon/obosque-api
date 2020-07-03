'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchases = sequelize.define('Purchases', {
    date: DataTypes.DATE,
    market: DataTypes.STRING
  }, {});
  Purchases.associate = function(models) {
    Purchases.hasMany(models.purchase_item, {as: 'items'})
  };
  return Purchases;
};