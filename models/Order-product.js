"use strict";

module.exports = (sequelize, DataTypes, Order, Product) => {
  const OrderProduct = sequelize.define("orderProduct", {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    productQuantity: {
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
