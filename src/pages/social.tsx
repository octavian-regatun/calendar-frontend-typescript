import IsAuthenticated from '@/components/IsAuthenticated';
import Layout from '@/components/Layout';
import styles from '@/styles/Social.module.css';

const SocialNextPage = (): JSX.Element => {
  return (
    <IsAuthenticated>
      <Layout>
        <div className={styles.root}>
          <h1>Social Page</h1>
        </div>
      </Layout>
    </IsAuthenticated>
  );
};

export default SocialNextPage;
