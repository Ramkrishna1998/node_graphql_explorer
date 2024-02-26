const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type List {
    title: String
    status: STATUS
  }

  type ToDoType {
    id: ID!
    userId: String!
    list: [List]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie!
    allTodoList: [ToDoType]
    getUserTodo(userId: String!): [List]
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = INDIA
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
  }

  enum Nationality {
    INDIA
    CANAD
    USA
  }
  enum STATUS {
    PENDING
    COMPLETED
  }
`;
module.exports = {
  typeDefs,
};
