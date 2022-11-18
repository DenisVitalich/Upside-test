import React, { useState } from 'react';
import { toJS } from 'mobx';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import { createUser } from '../utils/createUser';
import UserStore from '../stores/UserStore';
import style from '../styles/userForm.module.scss';

function UserForm() {
  const [gender, setGender] = useState('1');
  const [link, setLink] = useState('');
  const [open, setOpen] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowAlert(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    UserStore.setGender(Number(event.target.value));
    setGender(event.target.value);
  };
  const addLinks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };
  const addLinksStore = () => {
    UserStore.addUserLinks(link);
    setLink('');
  };

  const addUserBD = async () => {
    if (!UserStore.name) {
      setShowAlert(true);
      return;
    }
    setOpen(false);
    setShowAlert(false);
    const data = await createUser({
      name: UserStore.name,
      gender: UserStore.gender,
      links: toJS(UserStore.userLinks),
    });
    UserStore.addUserToList(data);
  };

  return (
    <div className={style['user-form']}>
      <Button variant="contained" onClick={handleOpen}>
        Add user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container className={style['my-container']}>
          <TextField
            id="outlined-basic"
            label="Name"
            required
            variant="outlined"
            onChange={(e) => UserStore.setName(e.target.value)}
          />
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={gender}
            onChange={handleChange}
            className={style['my-radio-group']}
          >
            <FormControlLabel value="1" control={<Radio />} label="Female" />
            <FormControlLabel value="2" control={<Radio />} label="Male" />
          </RadioGroup>
          <TextField
            onChange={addLinks}
            value={link}
            id="outlined-basic"
            label="Links"
            variant="outlined"
          />
          <Button
            variant="outlined"
            size="small"
            style={{ marginLeft: '15px' }}
            onClick={addLinksStore}
          >
            Add link
          </Button>
          {UserStore.userLinks.map((link: string, index) => (
            <li key={index}>{link}</li>
          ))}
          <div>
            <Button
              variant="contained"
              style={{ marginTop: '20px' }}
              onClick={addUserBD}
            >
              Add user
            </Button>
          </div>
          <Collapse in={showAlert}>
            <Alert severity="error" style={{ marginTop: '20px' }}>
              <AlertTitle>Error</AlertTitle>
              <strong>Name is empty </strong>
            </Alert>
          </Collapse>
        </Container>
      </Modal>
    </div>
  );
}

export default UserForm;
