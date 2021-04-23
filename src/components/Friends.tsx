import FriendshipStatus from '@/enums/friendshipStatus';
import { useAddFriendTextFieldState, useFriendsState } from '@/lib/store';
import styles from '@/styles/Friends.module.css';
import { Paper } from '@material-ui/core';
import { useEffect } from 'react';
import AddFriend from './AddFriend';
import Friend from './Friend';

const Friends = (): JSX.Element => {
  const textField = useAddFriendTextFieldState(state => state.textField);
  const friends = useFriendsState(state => state.friends);
  const updateFriends = useFriendsState(state => state.updateFriends);

  useEffect(() => {
    (async () => {
      await updateFriends();
    })();
  }, [updateFriends]);

  return (
    <Paper elevation={2} className={styles.paper}>
      <h1 className={styles.title}>Friends</h1>
      {friends.map(friend => (
        <Friend
          key={friend.user._id}
          _id={friend.user._id}
          firstName={friend.user.firstName}
          lastName={friend.user.lastName}
          pending={friend.status === FriendshipStatus.PENDING}
          className={styles.row}
        />
      ))}
      {textField}
      <AddFriend.Button className={styles.row} />
    </Paper>
  );
};

export default Friends;
