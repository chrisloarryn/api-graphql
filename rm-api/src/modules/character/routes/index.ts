import { asyncHandler } from '@/utils/index.js';
import express from 'express';
import { getCharactersHandler } from './handlers/get-characters.handler.js';

const router = express.Router();

router.get('/api/v1/characters', asyncHandler(getCharactersHandler));

export const characterRouter = router;
