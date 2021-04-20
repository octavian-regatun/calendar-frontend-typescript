import styles from '@/styles/Friend.module.css';
import { Avatar, Chip } from '@material-ui/core';

interface Props {
  firstName: string;
  lastName: string;
  pending?: boolean;
  className?: string;
}

const Friend = ({
  firstName,
  lastName,
  pending = false,
  className,
}: Props): JSX.Element => {
  return (
    <Chip
      avatar={
        <Avatar className={styles.avatar}>{`${firstName
          .charAt(0)
          .toUpperCase()}${lastName.charAt(0).toUpperCase()}`}</Avatar>
      }
      clickable
      label={`${firstName} ${lastName} ${pending && '- pending'}`}
      className={className}
    />
  );
};

export default Friend;
