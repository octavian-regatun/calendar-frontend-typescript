import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import TextTransition from "react-text-transition";
import { Store } from "../../../store/store";
import styles from "./Title.module.css";

export const Title: React.FC = () => {
  const calendar = useSelector((store: Store) => store.calendar);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={styles.root}>
      <TextTransition
        className={styles.title}
        text={`${months[Math.abs(calendar.month % 12)]}`}
      />
      <TextTransition className={styles.title} text={calendar.year} />
    </div>
  );
};
