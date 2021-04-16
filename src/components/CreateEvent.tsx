import styles from '@/styles/CreateEvent.module.css';
import { Button, TextField } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TitleIcon from '@material-ui/icons/Title';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { DateTimePicker } from '@material-ui/pickers';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import * as yup from 'yup';

const CreateEvent = (): JSX.Element => {
  const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false,
  });

  const validationSchema = yup.object({
    title: yup.string().required(),
  });

  interface InitialValues {
    title: string;
  }

  const formik = useFormik<InitialValues>({
    initialValues: {
      title: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>New Event</h2>
      <div className={styles.row}>
        <TitleIcon />
        <TextField
          name="title"
          variant="outlined"
          label="Title *"
          fullWidth
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </div>
      <div className={styles.row}>
        <ViewHeadlineIcon />
        <TextField variant="outlined" label="Description" multiline fullWidth />
      </div>
      <div className={styles.row}>
        <DateRangeIcon />
        <DateTimePicker
          label="From Date *"
          inputVariant="outlined"
          value={null}
          onChange={() => {
            return;
          }}
          style={{ marginRight: '16px' }}
        />
        <DateTimePicker
          label="To Date"
          inputVariant="outlined"
          value={null}
          onChange={() => {
            return;
          }}
        />
      </div>
      <div className={styles.row}>
        <LocationOnIcon />
        <TextField variant="outlined" label="Location" fullWidth />
      </div>
      <div className={styles.row} style={{ height: '200px' }}>
        <MapWithNoSSR />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Add Event
      </Button>
    </form>
  );
};

export default CreateEvent;
