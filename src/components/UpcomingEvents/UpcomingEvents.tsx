import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventsGet } from "../../store/events/action";
import { Store } from "../../store/store";
import { Title } from "../Title/Title";
import styles from "./UpcomingEvents.module.css";
import { Event } from "./Event/Event";

export const UpcomingEvents: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((store: Store) => store.events);

  useEffect(() => {
    dispatch(eventsGet());
  }, []);

  return (
    <div className={styles.root}>
      <Title
        text="Upcoming Events"
        variant="h4"
        color="dark"
        className={styles.title}
      />
      {events.events?.map((event) => (
        <Event
          key={`event-${event._id}`}
          id={event._id}
          title={event.title}
          description={event.description}
          fromDate={event.fromDate}
          toDate={event.toDate}
          location={event.location}
        />
      ))}
    </div>
  );
};
