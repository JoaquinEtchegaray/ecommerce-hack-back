"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "email",
      },
      address: {
        type: DataTypes.STRING,
        field: "address",
      },
      phone: {
        type: DataTypes.INTEGER,
        field: "phone",
      },
      role: {
        type: DataTypes.STRING,
        field: "role",
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
    { tableName: "users" }
  );

  return User;
};
