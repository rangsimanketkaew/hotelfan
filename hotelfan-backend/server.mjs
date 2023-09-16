import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { geo } from './data-source.mjs';

import * as fs from 'fs';
import * as path from 'path';

const typeDefs = fs.readFileSync(path.resolve(".", "schema.graphql").toString(), 'utf-8');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    geo: () => geo(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
