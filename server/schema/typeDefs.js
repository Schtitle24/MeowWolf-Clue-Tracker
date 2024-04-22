const typeDefs = `
  type User {
    user_id: Int!
    username: String!
    email: String!
    password: String!
  }
  
  type Interaction {
    id: Int!
    action: String!
    timestamp: String!
  }
  
  type Exhibit {
    id: Int!
    name: String!
    description: String!
    image: String!
  }
  
  type Clue {
    id: Int!
    description: String!
    category: String!
    exhibitID: Int!
    userId: Int!
  }
  
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User
    clues: [Clue!]!
    clue(id: ID!): Clue
    userClues(userId: ID!): [Clue!]!
    exhibits: [Exhibit!]!
    exhibit(id: ID!): Exhibit
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User!
    updateUser(id: ID!, username: String, email: String, password: String): User!
    deleteUser(id: ID!): User!
    addClue(description: String!, category: String!, exhibitId: ID!, userId: ID!): Clue!
    deleteClue(id: ID!): Clue!
  }
`;

module.exports = typeDefs;
