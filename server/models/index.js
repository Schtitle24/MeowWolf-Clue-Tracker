const sequelize = require('../config/connection.js');
const User = require('./User.js');
const Clue = require('./Clue.js');
const Exhibit = require('./Exhibit.js');
const Interaction = require('./Interaction.js')





module.exports = { 
  sequelize,
  User,
  Clue,
  Exhibit,

}