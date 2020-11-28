import axios from 'axios';
import { ILogin } from '../interfaces/interfaces';

export const login = (props: ILogin) => {
  const { username, password } = props;
  return axios.post("/api/login", {
    username,
    password
  })
}