import resolvers  from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Feedback {
        id: ID!
        type: String
        comment: String
        screenshot: String
  }

  type Query {
      getUser(id: ID!): User
      getUsers: [User]                 
  }
     
  input UserInput {
       name: String
       email: String
       password: String
  }


  type Mutation {
       createUser(input: UserInput): User
  }  

`;

export default typeDefs;
//exports.module = makeExecutableSchema({typeDefs, resolvers});
//
