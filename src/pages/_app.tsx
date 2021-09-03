import type { AppProps } from 'next/app';
// @ts-ignore
import firebase from 'lib/firebase';
import 'bootstrap/dist/css/bootstrap.css';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
