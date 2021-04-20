import styles from '@/styles/UpcomingEvents.module.css';

const UpcomingEvents = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {/* <Button variant="outlined" color="primary">
          &lt;
        </Button> */}
        <h1>Upcoming Events</h1>
        {/* <Button variant="outlined" color="primary">
          &gt;
        </Button> */}
      </div>
    </div>
  );
};

export default UpcomingEvents;
