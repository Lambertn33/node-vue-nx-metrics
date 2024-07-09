import { Request, Response } from 'express';
import axios from 'axios';
import { _GET_ALL, _GET_ONE } from '../services';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';

export const GET_ALL = async (_: Request, res: Response) =>
  _GET_ALL(apiEndpoint, 'Error fetching users', _, res);

export const GET_ONE = async (req: Request, res: Response) =>
  _GET_ONE(
    apiEndpoint,
    req,
    res,
    'user not found',
    'error fetching single user'
  );

export const GET_USER_POSTS = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${apiEndpoint}/${id}/posts`);
    const posts = await response.data;
    return res.status(200).json(posts);
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 404
    ) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      return res.status(500).json({ message: 'Error fetching user posts' });
    }
  }
};
