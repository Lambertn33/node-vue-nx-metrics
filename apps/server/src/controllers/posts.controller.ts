import { Request, Response } from 'express';
import { _GET_ALL, _GET_ONE } from '../services';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export const GET_ALL = async (_: Request, res: Response) =>
  _GET_ALL(apiEndpoint, 'Error fetching posts', _, res);

export const GET_ONE = async (req: Request, res: Response) =>
  _GET_ONE(
    apiEndpoint,
    req,
    res,
    'post not found',
    'error fetching single post'
  );
