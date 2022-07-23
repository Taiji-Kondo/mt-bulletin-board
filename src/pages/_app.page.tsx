import 'src/styles/globals.css';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { ErrorBoundary } from '@/components/layouts/ErrorBoundary/ErrorBoundary';
import { ErrorBoundaryFallback } from '@/components/layouts/ErrorBoundary/ErrorBoundaryFallback';
import { BaseSEO } from '@/components/layouts/head/BaseSEO';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <BaseSEO />
        <Component {...pageProps} />
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default MyApp;
