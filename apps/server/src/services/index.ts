import { Request, Response } from 'express';
import axios from 'axios';

export const _GET_ALL = async (
  apiEndpoint: string,
  errorMessage: string,
  req?: Request,
  res?: Response
) => {
  try {
    const { data } = await axios.get(apiEndpoint);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: errorMessage });
  }
};

export const _GET_ONE = async (
  apiEndpoint: string,
  req: Request,
  res: Response,
  notFoundMessage: string,
  errorMessage: string
) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${apiEndpoint}/${id}`);
    const user = await response.data;
    return res.status(200).json(user);
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 404
    ) {
      return res.status(404).json({ message: notFoundMessage });
    } else {
      return res.status(500).json({ message: errorMessage });
    }
  }
};
