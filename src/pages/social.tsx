import Friends from '@/components/Friends';
import IsAuthenticated from '@/components/IsAuthenticated';
import Layout from '@/components/Layout';
import styles from '@/styles/Social.module.css';
import { Grid, Paper } from '@material-ui/core';

const SocialNextPage = (): JSX.Element => {
  return (
    <IsAuthenticated>
      <Layout>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4} lg={3} className={styles.grid1}>
            <Friends />
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
