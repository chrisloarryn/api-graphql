import { z } from 'zod';
import { CharacterSchema } from '@/db/schema/index.js';

export const ResponseCharacterFullSchema = z
  .object({
    id: CharacterSchema.shape.id,
    name: CharacterSchema.shape.name,
    status: CharacterSchema.shape.status,
    species: CharacterSchema.shape.species,
    type: CharacterSchema.shape.type,
    gender: CharacterSchema.shape.gender,
    origin: CharacterSchema.shape.origin,
    location: CharacterSchema.shape.location,
    image: CharacterSchema.shape.image,
    episode: CharacterSchema.shape.episode,
    url: CharacterSchema.shape.url,
    created: CharacterSchema.shape.created,
  });
export type ResponseCharacterFull = z.infer<typeof ResponseCharacterFullSchema>;

export const RickAndMortyApiCharacterSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string().nullable(),
    prev: z.string().nullable(),
  }),
  // array of ResponseCharacterFullSchema
  results: z.array(ResponseCharacterFullSchema),
});

export type RickAndMortyApiCharacter = z.infer<typeof RickAndMortyApiCharacterSchema>;


export const ErrorApiResponse = z.object({
  error: z.string(),
});

export type ErrorApiResponse = z.infer<typeof ErrorApiResponse>;

export const ResponseCharacterSimpleSchema = z.object({
  id: CharacterSchema.shape.id,
});
export type ResponseCharacterSimple = {
  id: number;
};
