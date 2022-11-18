import axios from 'axios';
import { IUser } from '../types';

export async function createUser(user: IUser) {
  const { data } = await axios.post('http://localhost:5000/api/users', user);
  return data;
}
