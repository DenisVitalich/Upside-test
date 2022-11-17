import { makeAutoObservable } from 'mobx';

export class UserStore {
  userLinks: any[] = [];
  userList: string[] = [];
  name: string = '';
  gender: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addUserLinks(link: string) {
    this.userLinks = [...this.userLinks, link];
  }

  setUserList(users: string[]) {
    this.userList = [...users];
  }

  addUserToList(user: any) {
    this.userList.push(user);
  }

  setName(name: string) {
    this.name = name;
  }

  setGender(gender: number) {
    this.gender = gender;
  }
}

export default new UserStore();
