import '../styles/globals.css';
import 'react-creative-cursor/dist/styles.css';
import type { AppProps } from 'next/app';
import 'react-creative-cursor/dist/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
