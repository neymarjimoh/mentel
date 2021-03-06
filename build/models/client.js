"use strict";

module.exports = function (sequelize, DataTypes) {
  var Client = sequelize.define('Clients', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.TINYINT
    }
  });

  Client.associate = function (models) {
    Client.hasMany(models.Appointments, {
      onDelete: 'cascade'
    });
    Client.hasOne(models.Profiles, {
      onDelete: 'cascade'
    });
  };

  return Client;
};