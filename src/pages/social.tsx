import IsAuthenticated from '@/components/IsAuthenticated';
import Layout from '@/components/Layout';
import { Button } from '@material-ui/core';

const SocialNextPage = (): JSX.Element => {
  return (
    <IsAuthenticated>
      <Layout>
        <h1>Social Page</h1>
      </Layout>
    </IsAuthenticated>
  );
};

export default SocialNextPage;
