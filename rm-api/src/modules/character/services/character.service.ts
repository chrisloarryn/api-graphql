import type { Character } from '@/db/types.js';
import { Selectable } from 'kysely';
import { GetCharactersDTO } from '../use-cases/get-characters.use-case.js';
import axios, { AxiosError } from 'axios';
import { ErrorApiResponse, RickAndMortyApiCharacter } from '../responses/character.response.js';


async function findAll(pagination: GetCharactersDTO): Promise<Selectable<Character>[]> {
  const { page } = pagination;
  const urlApi = process.env.API_URL ?? 'https://rickandmortyapi.com/api';

  const fullUrl = `${urlApi}/character/?species=Human&page=${page}`; // /character/?species=Human

  try {
    const { data } = await axios.get<RickAndMortyApiCharacter>(fullUrl);
    if (!data) throw new Error('No data');
    return data.results as Selectable<Character>[];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const { response } = error as AxiosError<ErrorApiResponse>;
      if (response) throw new Error(response?.data?.error ?? 'No error message');
    }
    
    throw error;
  }
}

export const characterService = { findAll };
