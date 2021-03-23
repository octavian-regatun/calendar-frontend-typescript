/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { DateTimePicker, DateTimePickerProps } from "@material-ui/pickers";
import React from "react";

interface Props {
  color: string;
  backgroundColor: string;
  dateTimePickerProps: DateTimePickerProps;
}

export const CustomDateTimePicker: React.FC<Props> = ({
  color,
  backgroundColor,
  dateTimePickerProps,
}) => {
  return color === "white" ? (
    <DateTimePicker
      {...dateTimePickerProps}
      css={css`
        fieldset.MuiOutlinedInput-notchedOutline {
          border: none;
        }

        .MuiOutlinedInput-root {
          border: 1px solid #e0e0e0;
        }

        .MuiOutlinedInput-root.Mui-focused {
          border-color: white;
        }

        .MuiOutlinedInput-root:hover {
          border: 1px solid white;
        }

        label {
          color: #e0e0e0;
        }

        label.Mui-focused {
          color: white;
          padding: 0 4px;
          background-color: ${backgroundColor};
        }

        label.MuiFormLabel-filled {
          padding: 0 4px;
          background-color: ${backgroundColor};
        }

        &:hover label {
          color: white;
        }

        input {
          color: white;
        }
      `}
    />
  ) : null;
};
