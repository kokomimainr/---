'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    game_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};