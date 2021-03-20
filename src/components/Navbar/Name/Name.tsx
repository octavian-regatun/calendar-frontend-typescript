import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../store/store";
import styles from "./Name.module.css";

interface Props {
  className?: string;
}

export const Name: React.FC<Props> = ({ className }) => {
  const dataState = useSelector((state: Store) => state.data);

  return (
    <Typography variant="h6" className={`${styles.userName} ${className}`}>
      {`${dataState.user?.firstName} ${dataState.user?.lastName}`}
    </Typography>
  );
};
