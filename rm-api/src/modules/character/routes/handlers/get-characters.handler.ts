import { RequestHandler } from 'express';
import { characterFactory } from '../../factories/character.factory.js';
import { ResponseCharacterFull } from '../../responses/character.response.js';
import { getCharactersUseCase } from '../../use-cases/get-characters.use-case.js';

type ResponseBody = {
  data: ResponseCharacterFull[];
};

export const getCharactersHandler: RequestHandler<any, ResponseBody, any, any> = async (req, res) => {
  const { page } = req.query;

  const result = await getCharactersUseCase(
    {
      page: Number(page),
    },
    req.context,
  );

  // IMPORTANT:
  // Your return here doesn't necessarily have to be the same as your GraphQL API.
  // Think about how you want to design and handle your responses.
  res.send({
    data: result.data.map((user) => characterFactory.toFullResponse(user)),
  });
};
