import { Button, Typography } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SubjectIcon from "@material-ui/icons/Subject";
import dayjs from "dayjs";
import React from "react";
import { useDispatch } from "react-redux";
import { eventsDelete } from "../../../store/events/action";
import styles from "./Event.module.css";

interface Props {
  id: string;
  title: string;
  description?: string;
  fromDate: Date;
  toDate?: Date;
  location?: string;
}

export const Event: React.FC<Props> = ({
  id,
  title,
  description,
  fromDate,
  toDate,
  location,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(eventsDelete(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Typography variant="h6" className={`${styles.title} ${styles.text}`}>
          {title}
        </Typography>
      </div>
      {description ? (
        <div className={styles.row}>
          <SubjectIcon className={styles.icon} />
          <Typography variant="body1" className={`${styles.text}`}>
            {description}
          </Typography>
        </div>
      ) : null}

      <div className={styles.row}>
        <DateRangeIcon className={styles.icon} />
        <Typography variant="body1" className={`${styles.text}`}>
          {`${dayjs(fromDate).format(`DD MMMM YYYY HH:MM`)}${
            toDate ? dayjs(toDate).format(` - DD MMMM YYYY HH:MM`) : ""
          }`}
        </Typography>
      </div>
      {location ? (
        <div className={styles.row}>
          <LocationOnIcon className={styles.icon} />
          <Typography variant="body1" className={`${styles.text}`}>
            {location}
          </Typography>
        </div>
      ) : null}
      <div className={`${styles.row} ${styles.buttonRow}`}>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          DELETE
        </Button>
      </div>
    </div>
  );
};
