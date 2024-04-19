const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Exhibit extends Model {}

Exhibit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true, 
    modelName: 'exhibit',
  }
);

module.exports = Exhibit;