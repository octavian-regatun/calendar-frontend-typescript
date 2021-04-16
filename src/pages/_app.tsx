import Auth from '@/components/Auth';
import '@/styles/global.css';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import router from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  router.events.on('routeChangeStart', () => {
    nprogress.start();
  });
  router.events.on('routeChangeComplete', () => nprogress.done());
  router.events.on('routeChangeError', () => nprogress.done());

  return (
    <>
      <Head>
        <title>PlanITLY</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Auth>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
          <CssBaseline />
          <StylesProvider injectFirst>
            <Component {...pageProps} />
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </Auth>
    </>
  );
}
