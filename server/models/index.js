const sequelize = require('../config/connection.js');
const User = require('./User.js');
const Clue = require('./Clue.js');
const Exhibit = require('./Exhibit.js');
const Interaction = require('./Interaction.js')

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

Interaction.belongsTo(Clue, {
  foreignKey: {
    allowNull: false,
  },
});

Interaction.belongsTo(User, {
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