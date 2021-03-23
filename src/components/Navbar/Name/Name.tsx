import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../store/store";
import styles from "./Name.module.css";

interface Props {
  className?: string;
}

export const Name: React.FC<Props> = ({ className }) => {
  const user = useSelector((state: Store) => state.user);

  return (
    <Typography variant="h6" className={`${styles.userName} ${className}`}>
      {`${user.user?.firstName} ${user.user?.lastName}`}
    </Typography>
  );
};
