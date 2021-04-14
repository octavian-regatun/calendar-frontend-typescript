import styles from '@/styles/CreateEvent.module.css';
import { Button, TextField } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TitleIcon from '@material-ui/icons/Title';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import dynamic from 'next/dynamic';

const CreateEvent = (): JSX.Element => {
  const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false,
  });

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>New Event</h2>
      <div className={styles.row}>
        <TitleIcon />
        <TextField variant="outlined" label="Title" fullWidth />
      </div>
      <div className={styles.row}>
        <ViewHeadlineIcon />
        <TextField variant="outlined" label="Description" multiline fullWidth />
      </div>
      <div className={styles.row}>
        <LocationOnIcon />
        <TextField variant="outlined" label="Location" fullWidth />
      </div>
      <div className={styles.row} style={{ height: '200px' }}>
        <MapWithNoSSR />
      </div>
      <Button variant="contained" color="primary">
        Add Event
      </Button>
    </div>
  );
};

export default CreateEvent;
