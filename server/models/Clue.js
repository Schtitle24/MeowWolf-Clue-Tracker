const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Clue extends Model {}

Clue.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('solved', 'Unsolved'),
      defaultValue: 'Unsolved',
      allowNull: false,
    },
    exhibitID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exhibit',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      referemces: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'clue',
  }
);


module.exports = Clue;