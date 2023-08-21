import { IContext } from '@/shared/interfaces/index.js';
import { createDataLoader } from '@/utils/create-dataloader.util.js';
import { characterService } from '../../../character/services/character.service.js';
import { GetCharactersDTO } from '../../use-cases/get-characters.use-case.js';

export const characterByIdLoader = (ctx: IContext) =>
	createDataLoader(async (pagination: GetCharactersDTO) => {
		const rows = await characterService.findAll(pagination);

		return rows;
	});