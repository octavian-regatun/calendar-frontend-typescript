import { Drawer, IconButton } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SidebarButtons } from "../../types/sidebarButtons.type";
import styles from "./Sidebar.module.css";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  function isActivePage(page: SidebarButtons): string {
    const pageFromUri = location.pathname.replace("/", "");

    return pageFromUri === page ? styles.active : "";
  }

  return (
    <Drawer
      PaperProps={{ className: styles.drawerPaper }}
      variant="permanent"
      anchor="left"
    >
      <div className={styles.centerDiv}>
        {/* <div>
          <IconButton
            aria-label="dashboard"
            className={`${styles.button} ${isActivePage("dashboard")}`}
          >
            <DashboardIcon fontSize="large" />
          </IconButton>
        </div> */}
        <div>
          <IconButton
            aria-label="calendar"
            className={`${styles.button} ${isActivePage("calendar")}`}
            onClick={() => {
              history.push("/calendar");
            }}
          >
            <EventNoteIcon fontSize="large" />
          </IconButton>
        </div>
        {/* <div>
          <IconButton
            aria-label="statistics"
            className={`${styles.button} ${isActivePage("statistics")}`}
          >
            <TrendingUpIcon fontSize="large" />
          </IconButton>
        </div> */}
        <div>
          <IconButton
            aria-label="social"
            className={`${styles.button} ${isActivePage("social")}`}
            onClick={() => {
              history.push("/social");
            }}
          >
            <PeopleIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className={styles.settingsDiv}>
        <IconButton
          aria-label="settings"
          className={`${styles.button} ${isActivePage("settings")}`}
        >
          <SettingsIcon fontSize="large" />
        </IconButton>
      </div>
    </Drawer>
  );
};
