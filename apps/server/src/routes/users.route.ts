import { Router } from 'express';

import {
  GET_ALL,
  GET_ONE,
  GET_USER_POSTS,
} from '../controllers/users.controller';

const router = Router();

router.get('/', GET_ALL);

router.get('/:id', GET_ONE);

router.get('/:id/posts', GET_USER_POSTS);

export default router;
