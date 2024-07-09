import { Request, Response } from 'express';
import axios from 'axios';
import { IUser } from '@node-vue-prom/shared-types';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';

export const GET_ALL = async (_: Request, res: Response) => {
  try {
    const response = await axios.get(apiEndpoint);
    const users = (await response.data) as IUser[];
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching the users' });
  }
};

export const GET_ONE = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${apiEndpoint}/${id}`);
    const user = response.data as IUser;
    return res.status(200).json(user);
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 404
    ) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      return res.status(500).json({ message: 'Error fetching user' });
    }
  }
};
