"use strict";

module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define("orderProduct", {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return OrderProduct;
};
