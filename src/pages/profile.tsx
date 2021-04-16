import IsAuthenticated from '@/components/IsAuthenticated';
import Layout from '@/components/Layout';
import User from '@/interfaces/user';
import { BACKEND_URI } from '@/lib/constants';
import { useUserState } from '@/lib/store';
import styles from '@/styles/ProfileNextPage.module.css';
import { Avatar, Button, Snackbar, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const ProfileNextPage = (): JSX.Element => {
  const user = useUserState(state => state.user) as User;
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  const validationSchema = yup.object({
    username: yup.string().min(4).max(16),
  });

  interface InitialValues {
    username: string | null;
  }

  const formik = useFormik<InitialValues>({
    initialValues: {
      username: user?.username,
    },

    validationSchema,

    onSubmit: async values => {
      try {
        await axios.patch(`${BACKEND_URI}/users`, values);
        setIsSnackbarOpen(true);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <IsAuthenticated>
      <Layout>
        <form className={styles.root} onSubmit={formik.handleSubmit}>
          <div className={styles.row}>
            <Avatar className={styles.avatar}>
              {user?.firstName.charAt(0)}
              {user?.lastName.charAt(0)}
            </Avatar>
          </div>
          <div className={styles.row}>
            <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
          </div>
          <div className={styles.row}>
            <TextField
              name="username"
              variant="outlined"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </div>
          <div className={styles.row}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MuiAlert elevation={6} variant="filled">
            This is a success message!
          </MuiAlert>
        </Snackbar>
      </Layout>
    </IsAuthenticated>
  );
};

export default ProfileNextPage;
