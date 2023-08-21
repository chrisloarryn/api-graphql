import { GetCharactersDTO } from '@/modules/character/use-cases/get-characters.use-case.js';
import DataLoader from 'dataloader';

export const createDataLoader = <T>(cb: (pagination: GetCharactersDTO) => Promise<T[]>): DataLoader<string, T, string> =>
  new DataLoader<string, T>(async (pagination: unknown) => 
    cb(pagination as GetCharactersDTO)
  );
