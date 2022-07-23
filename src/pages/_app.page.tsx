import 'src/styles/globals.css';

import type { AppProps } from 'next/app';

import { BaseSEO } from '@/components/layouts/head/BaseSEO';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseSEO />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
