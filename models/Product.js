'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description'
    },
    image: {
      type: DataTypes.STRING,
      field: 'image'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'price'
    },
    stock: {
      type: DataTypes.INTEGER,
      field: 'stock'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
    },
    important: {
      type: DataTypes.BOOLEAN,
      field: 'important'
    },
    slug: {
      type: DataTypes.STRING,
      field: 'slug'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'products' });

  return Product;
};
