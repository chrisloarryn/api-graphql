import { Character } from '@/db/types.js';
import { GQL_CharacterResolvers, GQL_Character } from '@/generated/graphql/index.js';
import { Selectable } from 'kysely';

export const fullNameResolver: GQL_CharacterResolvers['name'] = async (parent) => {
  const user = parent as GQL_Character & Selectable<Character>;
  const name = [user.name]
    .map((x) => (x ? x.trim() : ''))
    .filter((x) => x.trim())
    .join(' ');

  return name;
};
