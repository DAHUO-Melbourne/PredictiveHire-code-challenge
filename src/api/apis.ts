import axios from 'axios';
import { ILogin, IPromiseReturn } from '../interfaces/interfaces';

export const login = (props: ILogin): Promise<IPromiseReturn> => {
  const { username, password } = props;
  return axios.post('/api/login', {
    username,
    password,
  });
};
