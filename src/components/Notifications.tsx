import { IconButton, Popover } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useState } from 'react';

interface Props {
  className?: string;
}

const Notifications = ({ className }: Props): JSX.Element => {
  const [
    notificationsAnchor,
    setNotificationsAnchor,
  ] = useState<HTMLButtonElement | null>(null);

  return (
    <div className={className}>
      <IconButton
        onClick={e => {
          setNotificationsAnchor(e.currentTarget);
        }}
      >
        <NotificationsIcon />
      </IconButton>
      <Popover
        open={Boolean(notificationsAnchor)}
        anchorEl={notificationsAnchor}
        onClose={() => {
          setNotificationsAnchor(null);
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <NotificationsContent />
      </Popover>
    </div>
  );
};

const NotificationsContent = (): JSX.Element => {
  return <h2>Notifications</h2>;
};

export default Notifications;
