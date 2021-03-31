import { Drawer, IconButton } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import React from "react";
import { useLocation } from "react-router-dom";
import { SidebarButtons } from "../../types/sidebarButtons.type";
import styles from "./Sidebar.module.css";

export const Sidebar: React.FC = () => {
  const location = useLocation();

  function isActivePage(page: SidebarButtons): string {
    const uriPage = location.pathname.replace("/", "");

    return uriPage === page ? styles.active : "";
  }

  return (
    <Drawer
      PaperProps={{ className: styles.drawerPaper }}
      variant="permanent"
      anchor="left"
    >
      <div className={styles.centerDiv}>
        <div>
          <IconButton
            aria-label="dashboard"
            className={`${styles.button} ${isActivePage("dashboard")}`}
          >
            <DashboardIcon fontSize="large" />
          </IconButton>
        </div>
        <div>
          <IconButton
            aria-label="calendar"
            className={`${styles.button} ${isActivePage("calendar")}`}
          >
            <EventNoteIcon fontSize="large" />
          </IconButton>
        </div>
        <div>
          <IconButton
            aria-label="statistics"
            className={`${styles.button} ${isActivePage("statistics")}`}
          >
            <TrendingUpIcon fontSize="large" />
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
