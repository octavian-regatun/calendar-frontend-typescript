/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import {
  calendarMonthDecrement,
  calendarMonthIncrement,
} from "../../../store/calendar/action";
import styles from "./ButtonMonth.module.css";

interface Props {
  variant: "increment" | "decrement";
}

export const ButtonMonth: React.FC<Props> = ({ variant }) => {
  const dispatch = useDispatch();

  return variant === "decrement" ? (
    <Button
      variant="outlined"
      size="small"
      className={styles.button}
      onClick={() => dispatch(calendarMonthDecrement())}
      css={css`
        .MuiButton-label {
          color: #002984 !important;
        }
      `}
    >
      {"<"}
    </Button>
  ) : (
    <Button
      variant="outlined"
      className={styles.button}
      onClick={() => dispatch(calendarMonthIncrement())}
      css={css`
        .MuiButton-label {
          color: #002984 !important;
        }
      `}
    >
      {">"}
    </Button>
  );
};
