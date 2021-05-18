'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('orderProduct', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    productAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_amount'
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_price'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'order_products' });

  return OrderProduct;
};
