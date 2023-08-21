// import { checkAuthentication } from '@/modules/auth/helpers/check-authentication.js';
import { IContext } from '@/shared/interfaces/index.js';
import { z } from 'zod';
// import { db } from '@/db/index.js';
import { Selectable } from 'kysely';
import type { Character } from '@/db/types.js';
import { createSchemaValidator } from '@/utils/index.js';
import { characterService } from '../services/character.service.js';

const dtoSchema = z.object({
  page: z.number().int().positive().default(1),
});
const validateDTO = createSchemaValidator(dtoSchema);
export type GetCharactersDTO = z.infer<typeof dtoSchema>;

type GetCharactersUseCaseResult = {
  data: Selectable<Character>[];
};
export async function getCharactersUseCase(dto: GetCharactersDTO, ctx: IContext): Promise<GetCharactersUseCaseResult> {
  // no authorization needed
  // await checkAuthentication(ctx);

  const { page } = await validateDTO(dto);
  const characters = await characterService.findAll({ page });
  return {
    data: characters,
  };
}
