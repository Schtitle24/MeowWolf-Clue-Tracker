const { Clue, Exhibit, Interaction, User } = require('../models');
const { signToken, AuthenicationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        return user;
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
    clue: async (_, { id }) => {
      try {
        const clue = await Clue.findByPk(id);
        return clue;
      } catch (error) {
        throw new Error('Failed to fetch clue');
      }
    },
    userClues: async (_, { userId }) => {
      try {
        const clues = await Clue.findAll({ where: { userId } });
        return clues;
      } catch (error) {
        throw new Error('Failed to fetch user clues');
      }
    },
    exhibit: async (_, { id }) => {
      try {
        const exhibit = await Exhibit.findByPk(id);
        return exhibit;
      } catch (error) {
        throw new Error('Failed to fetch exhibit');
      }
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        return user;
      } catch (error) {
        throw new Error('Failed to add user');
      }
    },
    addClue: async (_, { description, category, exhibitId, userId }) => {
      try {
        const clue = await Clue.create({ description, category, exhibitId, userId });
        return clue;
      } catch (error) {
        throw new Error('Failed to add clue');
      }
    },
    updateClueStatus: async (_, { id, status }) => {
      try {
        const clue = await Clue.findByPk(id);
        if (!clue) {
          throw new Error('Clue not found');
        }
        clue.status = status;
        await clue.save();
        return clue;
      } catch (error) {
        throw new Error('Failed to update clue status');
      }
    },
    deleteClue: async (_, { id }) => {
      try {
        const clue = await Clue.findByPk(id);
        if (!clue) {
          throw new Error('Clue not found');
        }
        await clue.destroy();
        return clue;
      } catch (error) {
        throw new Error('Failed to delete clue');
      }
    },
    markClueAsSolved: async (_, { id }) => {
      try {
        const clue = await Clue.findByPk(id);
        if (!clue) {
          throw new Error('Clue not found');
        }
        clue.status = 'SOLVED';
        await clue.save();
        return clue;
      } catch (error) {
        throw new Error('Failed to mark clue as solved');
      }
    },
  },
};

module.exports = resolvers;