import { Request, Response } from 'express';
import axios from 'axios';
import { httpRequestDurationMicroseconds } from '../metrics';

const end = httpRequestDurationMicroseconds.startTimer();

export const _GET_ALL = async (
  apiEndpoint: string,
  errorMessage: string,
  req?: Request,
  res?: Response
) => {
  try {
    const { data } = await axios.get(apiEndpoint);
    end({
      route: req?.route?.path,
      status_code: res.statusCode,
      method: req.method,
    });
    return res.status(200).json(data);
  } catch (error) {
    end({ route: req?.route?.path, status_code: 500, method: req.method });
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
    end({
      route: req?.route?.path,
      status_code: res.statusCode,
      method: req.method,
    });
    return res.status(200).json(user);
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 404
    ) {
      end({ route: req?.route?.path, status_code: 404, method: req.method });
      return res.status(404).json({ message: notFoundMessage });
    } else {
      end({ route: req?.route?.path, status_code: 500, method: req.method });
      return res.status(500).json({ message: errorMessage });
    }
  }
};
