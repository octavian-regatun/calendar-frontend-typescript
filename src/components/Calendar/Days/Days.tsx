import { YoutubeSearchedFor } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../store/store";
import styles from "./Days.module.css";

interface Day {
  date: number;
  type: "weekend" | "notCurrentMonth" | "normal";
}

export const Days: React.FC = () => {
  const calendar = useSelector((state: Store) => state.calendar);

  let colCounter = 0;

  function mapGetDay(day: number): number {
    if (day === 0) return 6;

    return day - 1;
  }

  function getNumberOfDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  function createDaysMatrix(): Day[][] {
    const days: Day[][] = [
      new Array(7).fill({ date: -1 } as Day),
      new Array(7).fill({ date: -1 } as Day),
      new Array(7).fill({ date: -1 } as Day),
      new Array(7).fill({ date: -1 } as Day),
      new Array(7).fill({ date: -1 } as Day),
      new Array(7).fill({ date: -1 } as Day),
    ];

    const rows = 5;
    const cols = 6;

    let row = -1;
    let col = -1;
    let date = -1;

    const weekDayOfFirstDayOfMonth = mapGetDay(
      new Date(calendar.year, calendar.month, 1).getDay()
    );

    const numberOfDaysInCurrentMonth = getNumberOfDaysInMonth(
      calendar.year,
      calendar.month
    );

    const numberOfDaysInLastMonth = getNumberOfDaysInMonth(
      calendar.year,
      calendar.month - 1
    );

    date = numberOfDaysInLastMonth;

    for (col = 0; col < weekDayOfFirstDayOfMonth; col += 1) {
      days[0][col] = { date, type: "notCurrentMonth" } as Day;
    }

    date = 1;

    for (row = 0; row <= rows; row += 1) {
      for (col = 0; col <= cols; col += 1) {
        if (days[row][col].date === -1 && date <= numberOfDaysInCurrentMonth) {
          days[row][col] = { date, type: "normal" } as Day;
          date += 1;
          if ((col % 5 === 0 || col % 6 === 0) && col !== 0) {
            days[row][col].type = "weekend";
          }
        }
      }
    }

    date = 1;

    for (row = 0; row <= rows; row += 1) {
      for (col = 0; col <= cols; col += 1) {
        if (days[row][col].date === -1 && date <= numberOfDaysInCurrentMonth) {
          days[row][col] = { date, type: "notCurrentMonth" } as Day;
          date += 1;
        }
      }
    }

    return days;
  }

  function isWeekend(day: Day): string {
    if (day.type === "weekend") return styles.weekend;

    return "";
  }

  function isNotCurrentMonth(day: Day): string {
    if (day.type === "notCurrentMonth") return styles.notCurrentMonth;

    return "";
  }

  return (
    <div className={styles.root}>
      {createDaysMatrix().map((row, indexRow) => (
        <div className={styles.daysRow} key={`calendar-row-${indexRow}`}>
          {row.map((col) => {
            colCounter += 1;
            return (
              <div
                key={`calendar-col-${colCounter}`}
                className={`${styles.day} ${isWeekend(col)} ${isNotCurrentMonth(
                  col
                )}`}
              >
                {col.date}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
