import {
  GOOGLE_CLIENT_ID,
  PRIVACY_POLICY_URI,
  TERMS_OF_SERVICE_URI,
} from '@/lib/constants';
import { setTokenInLocalStorage } from '@/lib/jwt';
import { useUserState } from '@/lib/store';
import styles from '@/styles/login.module.css';
import { Paper } from '@material-ui/core';
import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';

const LoginNextPage: React.FC = () => {
  const router = useRouter();
  const user = useUserState(state => state.user);

  if (user) router.push('calendar');

  async function googleSuccess(res: any): Promise<void> {
    const { tokenId }: { tokenId: string } = res;

    await setTokenInLocalStorage(tokenId);

    router.push('calendar');
  }

  function googleFailure(): void {
    router.push('login');
  }

  return user ? null : (
    <div className={styles.root}>
      <img width="300" src="/banner.svg" alt="logo" />
      <Paper className={styles.card} elevation={24}>
        <h1>Welcome</h1>
        <h4>
          By logging in you accept our{' '}
          <a href={PRIVACY_POLICY_URI}>Privacy Policy</a> and{' '}
          <a href={TERMS_OF_SERVICE_URI}>Terms of Service</a>.
        </h4>
        <GoogleLogin
          className={styles.googleButton}
          buttonText="Sign in with Google"
          clientId={GOOGLE_CLIENT_ID}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          responseType="id_token"
        />
      </Paper>
    </div>
  );
};

export default LoginNextPage;
