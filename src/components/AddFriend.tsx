import { BACKEND_URI } from '@/lib/constants';
import { useAddFriendTextFieldState, useFriendsState } from '@/lib/store';
import styles from '@/styles/AddFriend.module.css';
import socialStyles from '@/styles/Social.module.css';
import {
  Button as MuiButton,
  IconButton,
  TextField as MuiTextField,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface PropsButton {
  className?: string;
}

const Button = ({ className }: PropsButton): JSX.Element => {
  const updateTextField = useAddFriendTextFieldState(
    state => state.updateTextField,
  );

  return (
    <MuiButton
      className={`${styles.root} ${className}`}
      size="large"
      onClick={() => {
        updateTextField(<TextField className={socialStyles.row} />);
      }}
    >
      + Add Friend
    </MuiButton>
  );
};

interface PropsTextField {
  className?: string;
}

const TextField = ({ className }: PropsTextField): JSX.Element => {
  const updateTextField = useAddFriendTextFieldState(
    state => state.updateTextField,
  );

  const updateFriendships = useFriendsState(
    state => state.updateFriends,
  );

  interface UserSuggestion {
    _id: string;
    username: string;
  }

  const [usersSuggestions, setUsersSuggestions] = useState<UserSuggestion[]>(
    [],
  );

  async function handleChange(value: UserSuggestion | null): Promise<void> {
    try {
      if (value)
        await axios.post(`${BACKEND_URI}/friendships/request`, {
          username: value.username,
        });
    } catch (e) {
      console.log(e);
    }

    await updateFriendships();

    updateTextField(null);
  }

  useEffect(() => {
    (async () => {
      const { data: usersSuggestions } = await axios.get<UserSuggestion[]>(
        `${BACKEND_URI}/friendships/suggestions`,
      );

      setUsersSuggestions(usersSuggestions);
    })();
  }, []);

  return (
    <div className={`${styles.rootTextField} ${className}`}>
      <Autocomplete
        options={usersSuggestions}
        getOptionLabel={item => item.username}
        getOptionSelected={(item, value) => item._id === value._id}
        onChange={async (e, value) => {
          await handleChange(value);
        }}
        fullWidth
        renderInput={props => (
          <MuiTextField
            {...props}
            label="Username"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <IconButton
        onClick={() => {
          updateTextField(null);
        }}
      >
        <Close />
      </IconButton>
    </div>
  );
};

const AddFriend = {
  Button,
  TextField,
};

export default AddFriend;
