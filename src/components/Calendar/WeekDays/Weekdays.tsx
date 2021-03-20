import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./Weekdays.module.css";

export const Weekdays: React.FC = () => {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function isWeekend(day: string): string | undefined {
    if (day === "Saturday" || day === "Sunday") return styles.weekend;

    return undefined;
  }

  return (
    <div className={styles.root}>
      {weekdays.map((weekday) => (
        <div
          className={`${styles.weekday} ${isWeekend(weekday)}`}
          key={`calendar-weekdays-${weekday}`}
        >
          <Typography variant="h6">{weekday}</Typography>
        </div>
      ))}
    </div>
  );
};
