'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    statusId: {
      type: DataTypes.INTEGER,
      field: 'status_id'
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      field: 'total_price'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'orders' });

  return Order;
};
