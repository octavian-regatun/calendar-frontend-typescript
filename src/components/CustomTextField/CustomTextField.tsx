/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { TextField, TextFieldProps } from "@material-ui/core";
import React from "react";
import styles from "./CustomTextField.module.css";

interface Props {
  textFieldProps?: TextFieldProps;
  backgroundColor: string;
}

export const CustomTextField: React.FC<Props> = ({
  backgroundColor,
  textFieldProps,
}) => {
  return (
    <TextField
      {...textFieldProps}
      variant="outlined"
      InputLabelProps={{ className: "test" }}
      css={css`
        fieldset.MuiOutlinedInput-notchedOutline {
          border: none;
        }

        .MuiOutlinedInput-root {
          border: 1px solid #bdbdbd;
        }

        .MuiOutlinedInput-root.Mui-focused {
          border-color: white;
        }

        .MuiOutlinedInput-root:hover {
          border: 1px solid white;
        }

        label {
          color: #bdbdbd;
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
  );
};
