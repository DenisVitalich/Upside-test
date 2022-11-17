import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import UserStore from '../stores/UserStore';
import style from '../styles/userList.module.scss';

import { observer } from 'mobx-react';

const userList = observer(() => {
  return (
    <List className={style['user-list']}>
      {UserStore.userList.map((user: any) => (
        <div key={user._id}>
          <ListItem alignItems="flex-start">
            <ListItemButton href={`/users/${user._id}`}>
              <ListItemAvatar>
                <Avatar alt={user.name} src="#" />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={<span style={{ overflowWrap: 'anywhere' }}></span>}
              />
              {user.gender === 1 ? 'Female' : 'Male'}
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
});

export default userList;
