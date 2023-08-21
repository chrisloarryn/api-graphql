import { GQL_QueryResolvers } from '@/generated/graphql/index.js';
import { characterFactory } from '../../factories/character.factory.js';
import { getCharactersUseCase } from '../../use-cases/get-characters.use-case.js';

export const charactersResolver: GQL_QueryResolvers['characters'] = async (root, args, ctx) => {
  const result = await getCharactersUseCase(
    {
      page: args.page ?? 1,
    },
    ctx,
  );

  return result.data.map((user) => characterFactory.createGQLCharacter(user));
};
