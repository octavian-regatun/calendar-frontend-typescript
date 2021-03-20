import { PropTypes, Typography, TypographyVariant } from "@material-ui/core";
import React from "react";
import styles from "./Title.module.css";

interface Props {
  text: string;
  variant: TypographyVariant;
  color: "main" | "dark";
  className?: string;
  align?: PropTypes.Alignment;
}

export const Title: React.FC<Props> = ({
  text,
  variant,
  color,
  className,
  align,
}) => {
  function whatColor(): string {
    switch (color) {
      case "main":
        return styles.titleMain;
      case "dark":
        return styles.titleDark;
      default:
        return "";
    }
  }

  return (
    <Typography
      variant={variant}
      className={`${whatColor()} ${className}`}
      align={align}
    >
      {text}
    </Typography>
  );
};
