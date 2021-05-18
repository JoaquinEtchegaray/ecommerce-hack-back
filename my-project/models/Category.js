"use strict";

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "category",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    { tableName: "categories" }
  );

  return Category;
};
