import { Character } from '@/db/types.js';
import { ResponseCharacterFull } from '@/modules/character/responses/character.response.js';
import { Selectable } from 'kysely';

export class ParserCharacter {
	#character: Selectable<Character>;
	constructor(data: ResponseCharacterFull) {
		this.#character = {
			id: data.id,
			name: data.name,
			status: data.status,
			species: data.species,
			type: data.type ? data.type : '',
			gender: data.gender,
			origin: data.origin,
			location: data.location,
			image: data.image,
			episode: data.episode,
			url: data.url,
			created: data.created,
		};
	}

	get character(): Selectable<Character> {
		return this.character;
	}
}