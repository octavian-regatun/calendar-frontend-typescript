import { useFriendsState } from '@/lib/store';
import styles from '@/styles/Friend.module.css';
import { Avatar, Chip } from '@material-ui/core';

interface Props {
  _id: string;
  firstName: string;
  lastName?: string;
  pending?: boolean;
  className?: string;
}

const Friend = ({
  firstName,
  lastName,
  pending = false,
  className,
  _id,
}: Props): JSX.Element => {
  const deleteFriend = useFriendsState(state => state.deleteFriend);

  return (
    <Chip
      avatar={
        <Avatar className={styles.avatar}>{`${firstName
          .charAt(0)
          .toUpperCase()}${lastName?.charAt(0).toUpperCase()}`}</Avatar>
      }
      clickable
      label={`${firstName} ${lastName} ${pending ? '- pending' : ''}`}
      className={className}
      onDelete={async () => {
        await deleteFriend(_id);
      }}
    />
  );
};

export default Friend;
