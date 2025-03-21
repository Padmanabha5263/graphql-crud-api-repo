import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
    greetings: String
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String, email: String, password: String): User
    deleteUser(id: ID!): User
  }
`);
