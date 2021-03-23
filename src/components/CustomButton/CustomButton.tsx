import { Button, ButtonProps } from "@material-ui/core";
import React from "react";
import styles from "./CustomButton.module.css";

interface Props {
  color: string;
  buttonProps: ButtonProps;
}

export const CustomButton: React.FC<Props> = ({
  color,
  buttonProps,
  children,
}) => {
  return color === "white" ? (
    <Button {...buttonProps} className={styles.button}>
      {children}
    </Button>
  ) : null;
};
