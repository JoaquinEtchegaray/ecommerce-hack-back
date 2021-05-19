"use strict";

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    statusId: {
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    },
  });

  return Order;
};
