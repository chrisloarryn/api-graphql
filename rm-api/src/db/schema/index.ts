import { z } from 'zod';

const createdAt = z.string().datetime();
const updatedAt = z.string().datetime();

export const CharacterSchema = z
  .object({
    id: z.number().int().positive(),
    name: z.string(),
    // enum: ['Alive', 'Dead', 'unknown'],
    status: z.string(),
    species: z.string(),
    type: z.string().nullable().optional(),
    gender: z.string(),
    origin: z.object({
      name: z.string(),
      url: z.string(),
    }),
    location: z.object({
      name: z.string(),
      url: z.string(),
    }),
    image: z.string().url(),
    episode: z.array(z.string().url()),
    url: z.string().url(),
    created: z.string().datetime(),
  })
  .merge(z.object({ createdAt, updatedAt }));

export const SystemRoleSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable().optional(),
});

export const UserSystemRolesSchema = z.object({
  characterId: CharacterSchema.shape.id,
  systemRoleId: SystemRoleSchema.shape.id,
});
