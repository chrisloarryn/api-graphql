import { characterByIdLoader } from '@/modules/character/graphql/dataloaders/index.js'; ///graphql/dataloaders/index.js';
import { IContext } from '@/shared/interfaces/index.js';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initLoaders = (ctx: IContext) => {
  const loaders = {
    characterById: characterByIdLoader(ctx),
  };

  return loaders;
};
