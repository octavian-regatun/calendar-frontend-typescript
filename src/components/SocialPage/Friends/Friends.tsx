import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AddFriend } from "./AddFriend/AddFriend";
import styles from "./Friends.module.css";

let elementsIndex = 0;

export const Friends: React.FC = () => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  const handleAddFriend = () => {
    setElements((elements) => [
      ...elements,
      <AddFriend
        key={elementsIndex}
        index={elementsIndex}
        setElements={setElements}
      />,
    ]);
    elementsIndex++;
  };

  return (
    <div className={styles.root}>
      <Typography variant="h3" className={styles.title}>
        Friends
      </Typography>

      <div className={styles.container}>
        <div>{elements.map((event) => event)}</div>
        <Button
          className={styles.button}
          variant="outlined"
          onClick={handleAddFriend}
        >
          + ADD A FRIEND
        </Button>
      </div>
    </div>
  );
};
