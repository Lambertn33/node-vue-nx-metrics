import { Router } from 'express';

import { GET_ALL, GET_ONE } from '../controllers/posts.controller';

const router = Router();

router.get('/', GET_ALL);

router.get('/:id', GET_ONE);

export default router;
