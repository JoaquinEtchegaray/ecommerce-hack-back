"use strict";

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isFeatured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Product;
};
