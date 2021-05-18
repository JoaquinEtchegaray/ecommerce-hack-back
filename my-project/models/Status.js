'use strict';

module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('status', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'status'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'statuses' });

  return Status;
};
