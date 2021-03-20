import React from "react";
import { Title } from "../Title/Title";
import styles from "./UpcomingEvents.module.css";

export const UpcomingEvents: React.FC = () => {
  return (
    <div className={styles.root}>
      <Title text="Upcoming Events" variant="h4" color="dark" />
    </div>
  );
};
