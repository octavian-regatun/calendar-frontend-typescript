import Calendar from '@/components/Calendar';
import IsAuthenticated from '@/components/IsAuthenticated';
import Layout from '@/components/Layout';
import UpcomingEvents from '@/components/UpcomingEvents';
import { Grid } from '@material-ui/core';

const CalendarNextPage: React.FC = () => {
  return (
    <IsAuthenticated>
      <Layout>
        <Grid container>
          <Grid item xs={12} lg={9}>
            <Calendar />
          </Grid>
          <Grid item xs={12} lg={3}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Layout>
    </IsAuthenticated>
  );
};

export default CalendarNextPage;
