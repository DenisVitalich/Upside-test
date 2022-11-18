import { makeAutoObservable } from 'mobx';
import axios from 'axios';

interface IUser {
  name: string;
  gender: number;
  links?: string[];
}

export class UserStore {
  userLinks: any[] = [];
  userList: IUser[] = [];
  name: string = '';
  gender: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addUserLinks(link: string) {
    this.userLinks = [...this.userLinks, link];
  }

  setUserList(users: IUser[]) {
    this.userList = [...users];
  }

  addUserToList(user: IUser) {
    this.userList.push(user);
  }

  setName(name: string) {
    this.name = name;
  }

  setGender(gender: number) {
    this.gender = gender;
  }

  async getUsers() {
    const { data } = await axios.get('http://localhost:5000/api/users');
    this.userList = data;
    return data;
  }
}

export default new UserStore();
