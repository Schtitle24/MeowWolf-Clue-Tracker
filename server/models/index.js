const sequelize = require('../config/connection.js');
const Exhibit = require('./Exhibit.js');
const User = require('./User.js');
const Clue = require('./Clue.js');


Clue.belongsTo(Exhibit, {
  foreignKey: {
    allowNull: false,
  },
});

Clue.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
});


module.exports = { 
  sequelize,
  User,
  Clue,
  Exhibit,

}