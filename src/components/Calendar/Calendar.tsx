import React from "react";
import { Days } from "./Days/Days";
import { Title } from "./Title/Title";
import { Weekdays } from "./WeekDays/Weekdays";
import styles from "./Calendar.module.css";
import { ButtonMonth } from "./ButtonMonth/ButtonMonth";

export const Calendar: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <Title />
        <div>
          <ButtonMonth variant="decrement" />
          <ButtonMonth variant="increment" />
        </div>
      </div>
      <Weekdays />
      <Days />
    </>
  );
};
