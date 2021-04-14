import { AppBar, Avatar, Button } from '@material-ui/core';
import styles from '@/styles/Navbar.module.css';
import { useRouter } from 'next/router';
import { userInfo } from 'node:os';
import { useUserState } from '@/lib/store';

const Navbar: React.FC = () => {
  const router = useRouter();
  const user = useUserState(state => state.user);

  function handleLogOut(): void {
    router.push('logout');
  }

  return (
    <AppBar color="transparent" position="sticky" className={styles.root}>
      <div>
        <img width="50" src="logo.svg" alt="logo" />
      </div>
      <h1 className={styles.title}>Calendar</h1>
      <div className={styles.col}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogOut}
          className={styles.logOut}
        >
          Log Out
        </Button>
        <Avatar className={styles.avatar}>
          {user?.firstName.charAt(0)}
          {user?.lastName.charAt(0)}
        </Avatar>
        <h2>
          {user?.firstName} {user?.lastName}
        </h2>
      </div>
    </AppBar>
  );
};

export default Navbar;
