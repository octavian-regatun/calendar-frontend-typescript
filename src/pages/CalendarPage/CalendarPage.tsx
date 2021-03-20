import { Grid } from "@material-ui/core";
import React from "react";
import { Calendar } from "../../components/Calendar/Calendar";
import { CreateEvent } from "../../components/CreateEvent/CreateEvent";
import { Navbar } from "../../components/Navbar/Navbar";
import { UpcomingEvents } from "../../components/UpcomingEvents/UpcomingEvents";
import styles from "./CalendarPage.module.css";

export const CalendarPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Grid container className={styles.container}>
        <Grid item md={3}>
          <CreateEvent />
        </Grid>
        <Grid item md={6} className={styles.middleGrid}>
          <Calendar />
        </Grid>
        <Grid item md={3}>
          <UpcomingEvents />
        </Grid>
      </Grid>
    </>
  );
};
