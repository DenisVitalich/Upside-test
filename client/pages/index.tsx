import React, { useEffect } from 'react';

import UserForm from '../components/userForm';
import UserList from '../components/userList';
import UserStore from '../stores/UserStore';
import { observer } from 'mobx-react';

interface IUser {
  name: string;
  gender: number;
  links?: string[];
}

const Index = observer(() => {
  useEffect(() => {
    UserStore.getUsers();
  }, []);

  return (
    <div className="main-box">
      <UserForm />
      <UserList />
    </div>
  );
});
export default Index;
