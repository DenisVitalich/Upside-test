import * as React from 'react';

import UserForm from '../components/userForm';
import UserList from '../components/userList';
import UserStore from '../stores/UserStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

const Index = observer(({ users }: any) => {
  React.useEffect(() => {
    UserStore.setUserList(toJS(users));
  }, [users]);

  return (
    <div className="main-box">
      <UserForm />
      <UserList />
    </div>
  );
});
export default Index;

export async function getStaticProps(context: any) {
  const response = await fetch(`http://localhost:5000/api/users`);
  const users = await response.json();

  return {
    props: { users },
  };
}
