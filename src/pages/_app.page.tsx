import { MantineProvider } from '@mantine/core';
import { RecoilRoot } from 'recoil';
import { Provider } from 'urql';

import { MANTINE_THEME } from '@/constants/theme/mantineTheme';
import { ErrorBoundary } from '@/layouts/ErrorBoundary/ErrorBoundary';
import { ErrorBoundaryFallback } from '@/layouts/ErrorBoundary/ErrorBoundaryFallback';
import { BaseSEO } from '@/layouts/head/BaseSEO';
import { urqlClient } from '@/libs/urqlClient';
import type { AppPropsWithLayoutType } from '@/types/NextLayoutType';

function MyApp({ Component, pageProps }: AppPropsWithLayoutType) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <RecoilRoot>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={MANTINE_THEME}>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <Provider value={urqlClient}>
            <BaseSEO />
            <Component {...pageProps} />
          </Provider>
        </ErrorBoundary>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default MyApp;
