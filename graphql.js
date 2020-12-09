// graphql.js
// https://www.apollographql.com/docs/apollo-server/deployment/lambda/
const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// This creates an export named graphqlHandler with a Lambda function handler.
exports.graphqlHandler = server.createHandler();
