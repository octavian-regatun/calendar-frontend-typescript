import React from "react";
import { Title } from "../Title/Title";
import styles from "./CreateEvent.module.css";
import { Form } from "./Form/Form";

export const CreateEvent: React.FC = () => {
  return (
    <div className={styles.root}>
      <Title text="Create Event" variant="h4" color="dark" />
      <Form />
    </div>
  );
};
