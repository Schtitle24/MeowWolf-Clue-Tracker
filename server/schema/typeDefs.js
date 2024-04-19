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
type Exhibit{
  id: Int!
  name: String!
  description: String! 
  image: String!
}
type Clue{
  id: Int! 
  description: String!
  category: String!
  status: String!
  exhibitID: Int!
  userId: Int!
}
type Auth {
  token: ID!
  user: User
}
type Query {
  user(id: ID!): User
  clue(id: ID!): Clue
  userClues(userId: ID!): [Clue!]!
  exhibit(id: ID!): Exhibit
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): User!
  updateUser(id: ID!, username: String, email: String, password: String): User!
  deleteUser(id: ID!): User!
  addClue(description: String!, category: String!, status: ClueStatus!, exhibitId: ID!, userId: ID!): Clue!
  updateClueStatus(id: ID!, status: ClueStatus!): Clue!
}
`;

module.exports = typeDefs