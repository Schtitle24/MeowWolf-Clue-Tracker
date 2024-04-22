const { Clue, Exhibit, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },
    user: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        return user;
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
    clues: async () => {
      try {
        const clues = await Clue.findAll();
        return clues;
      } catch (error) {
        throw new Error('Failed to fetch clues');
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
    exhibits: async () => {
      try {
        const exhibits = await Exhibit.findAll();
        return exhibits;
      } catch (error) {
        throw new Error('Failed to fetch exhibits');
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
    updateUser: async (_, { id, username, email, password }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error('User not found');
        }
        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
        await user.save();
        return user;
      } catch (error) {
        throw new Error('Failed to update user');
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error('User not found');
        }
        await user.destroy();
        return user;
      } catch (error) {
        throw new Error('Failed to delete user');
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
  };

module.exports = resolvers;
