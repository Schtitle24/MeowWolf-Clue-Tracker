// Clue Model
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
    exhibitId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exhibits',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', 
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
