import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { MANTINE_THEME } from '@/constants/theme/mantineTheme';
import { ErrorBoundary } from '@/layouts/ErrorBoundary/ErrorBoundary';
import { ErrorBoundaryFallback } from '@/layouts/ErrorBoundary/ErrorBoundaryFallback';
import { BaseSEO } from '@/layouts/head/BaseSEO';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={MANTINE_THEME}>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <BaseSEO />
          <Component {...pageProps} />
        </ErrorBoundary>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default MyApp;
