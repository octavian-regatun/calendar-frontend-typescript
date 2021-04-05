import { IconButton, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import React, { ChangeEvent, ReactEventHandler, useState } from "react";
import config from "../../../../config";
import { UserPublic } from "../../../../interfaces/user.interface";
import styles from "./AddFriend.module.css";

interface Props {
  setElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  index: number;
}

export const AddFriend: React.FC<Props> = ({ setElements, index }) => {
  const [friendsSuggestions, setFriendsSuggestions] = useState<UserPublic[]>(
    []
  );

  const handleChange = async () => {
    const { data: users } = await axios.get<UserPublic[]>(
      `${config.BACKEND_URI}/api/users`
    );

    setFriendsSuggestions(users);
  };

  const handleDelete = () =>
    setElements((addFriendList: JSX.Element[]) => {
      const temp = addFriendList.filter(
        (element) => element.props.index !== index
      );

      return temp;
    });

  const handleSelect = async (
    event: any,
    user: UserPublic | null
  ): Promise<void> => {
    await axios.post(`${config.BACKEND_URI}/api/friendships/add-friend`, {
      email: user?.email,
    });

    handleDelete();
  };

  return (
    <div className={styles.root}>
      <Autocomplete
        onChange={handleSelect}
        className={styles.autocomplete}
        options={friendsSuggestions}
        getOptionLabel={(option) => option.email}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Friend Email"
            variant="outlined"
            onChange={async () => {
              await handleChange();
            }}
          />
        )}
      />

      <IconButton aria-label="delete" onClick={handleDelete}>
        <CloseIcon fontSize="default" />
      </IconButton>
    </div>
  );
};
