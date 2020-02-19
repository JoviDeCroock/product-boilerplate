const { ApolloServer } = require('apollo-server-lambda');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
})

console.log('SERVER', process.env);
exports.handler = server.createHandler()
