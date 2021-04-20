import AddFriend from '@/components/AddFriend';
import IsAuthenticated from '@/components/IsAuthenticated';
import Layout from '@/components/Layout';
import { useAddFriendTextFieldState } from '@/lib/store';
import styles from '@/styles/Social.module.css';
import { Grid, Paper } from '@material-ui/core';

const SocialNextPage = (): JSX.Element => {
  const textField = useAddFriendTextFieldState(state => state.textField);

  return (
    <IsAuthenticated>
      <Layout>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4} lg={3} className={styles.grid1}>
            <Paper elevation={2} className={styles.paper}>
              <h1 className={styles.title}>Friends</h1>
              {textField}
              <AddFriend.Button className={styles.row} />
            </Paper>
            <Paper elevation={2} className={styles.paper}>
              <h1 className={styles.title}>Groups</h1>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} lg={6}></Grid>
          <Grid item xs={12} md={3} lg={3}></Grid>
        </Grid>
      </Layout>
    </IsAuthenticated>
  );
};

export default SocialNextPage;
