import { GQL_Resolvers } from '@/generated/graphql/index.js';
import { charactersResolver } from './characters.query.js';
import { fullNameResolver } from './name.query.js';

const resolvers: GQL_Resolvers = {
  Query: {
    characters: charactersResolver,
  },
  Character: {
    name: fullNameResolver,
  },
};
export default resolvers;
