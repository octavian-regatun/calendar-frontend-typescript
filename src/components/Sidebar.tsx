import styles from '@/styles/Sidebar.module.css';
import { Drawer, Hidden, IconButton, SwipeableDrawer } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PeopleIcon from '@material-ui/icons/People';

const SidebarContent = (): JSX.Element => {
  const router = useRouter();
  const activePage = router.pathname.split('/')[1];

  function isPageActive(page: string): string {
    if (page === activePage) return styles.activePage;

    return '';
  }

  function routeToPage(page: string): void {
    if (activePage !== page) router.push(page);
  }

  return (
    <>
      <div className={styles.row}></div>
      <div className={styles.row}>
        <IconButton
          className={`${styles.icon} ${isPageActive('calendar')}`}
          onClick={() => routeToPage('calendar')}
        >
          <CalendarTodayIcon fontSize="large" />
        </IconButton>
        <IconButton
          className={`${styles.icon} ${isPageActive('social')}`}
          onClick={() => routeToPage('social')}
        >
          <PeopleIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={styles.row}></div>
    </>
  );
};

interface SidebarProps {
  children: JSX.Element | JSX.Element[];
}

const Sidebar = ({ children }: SidebarProps): JSX.Element => {
  const isSmallScreen = useMediaQuery({ minWidth: 960 });
  const [isSwipeableDrawerOpen, setIsSwipeableDrawerOpen] = useState(false);

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            className: styles.drawer,
            elevation: 4,
          }}
        >
          <SidebarContent />
        </Drawer>
      </Hidden>

      <Hidden lgUp>
        <SwipeableDrawer
          anchor="left"
          open={isSwipeableDrawerOpen}
          onOpen={() => {
            setIsSwipeableDrawerOpen(true);
          }}
          onClose={() => {
            setIsSwipeableDrawerOpen(false);
          }}
          PaperProps={{
            className: styles.drawer,
          }}
        >
          <SidebarContent />
        </SwipeableDrawer>
      </Hidden>
      <div className={isSmallScreen ? styles.contentShift : ''}>{children}</div>
    </>
  );
};

export default Sidebar;
