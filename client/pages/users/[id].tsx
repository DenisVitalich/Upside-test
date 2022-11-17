import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import style from '../../styles/user.module.scss';

export default function User({ user }: any) {
  return (
    <div className={style['user-box']}>
      <Link href="/">Back</Link>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={user.name} src="#" />
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={<span style={{ overflowWrap: 'anywhere' }}></span>}
        />
        {user.gender === 1 ? 'Female' : 'Male'}
      </ListItem>
      <ul>
        {user.links.map((link: string, index: number) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const response = await fetch(`http://localhost:5000/api/users/${params.id}`);
  const user = await response.json();
  return {
    props: { user },
  };
}
