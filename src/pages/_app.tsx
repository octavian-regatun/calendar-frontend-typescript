import Auth from '@/components/Auth';
import '@/styles/global.css';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import router from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

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
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>

      <Auth>
        <CssBaseline />
        <StylesProvider injectFirst>
          <Component {...pageProps} />
        </StylesProvider>
      </Auth>
    </>
  );
}
