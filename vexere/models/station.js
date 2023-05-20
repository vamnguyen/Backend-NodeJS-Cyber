'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      // define association here
      this.hasMany(Trip, { foreignKey: 'fromStation', as: 'from' })
      this.hasMany(Trip, { foreignKey: 'toStation', as: 'to' })
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        checkLength(value) {
          if (value.length >= 3 && value.length <= 100) {
            return true
          } else {
            throw new Error('độ dài địa chỉ phải từ 3 - 100')
          }
        }
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isIn: [['Hồ Chí Minh', 'Đà Nẵng', 'Hà Nội']]
      // }
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};