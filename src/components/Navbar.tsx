/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useUserState } from '@/lib/store';
import styles from '@/styles/Navbar.module.css';
import { AppBar, Avatar, Button, Hidden } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Notifications from './Notifications';

const Navbar: React.FC = () => {
  const router = useRouter();
  const user = useUserState(state => state.user);

  function getTitle(): string {
    const title = router.pathname.split('/')[1];
    return title.charAt(0).toLocaleUpperCase() + title.substring(1);
  }

  return (
    <AppBar color="transparent" position="sticky" className={styles.root}>
      <img
        src="logo.svg"
        alt="logo"
        width={50}
        className={styles.logo}
        onClick={() => {
          router.push('calendar');
        }}
      />

      <h1 className={styles.title}>{getTitle()}</h1>
      <Hidden smDown>
        <div className={styles.col}>
          <Notifications className={styles.notifications} />
          <Button
            onClick={() => {
              router.push('profile');
            }}
          >
            <Avatar className={styles.avatar}>
              {user?.firstName.charAt(0)}
              {user?.lastName?.charAt(0)}
            </Avatar>
            <h2 className={styles.name}>
              {user?.firstName} {user?.lastName}
            </h2>
          </Button>
        </div>
      </Hidden>
    </AppBar>
  );
};

export default Navbar;
