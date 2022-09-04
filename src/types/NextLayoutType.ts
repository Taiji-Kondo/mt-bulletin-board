import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayoutType<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type AppPropsWithLayoutType = AppProps & {
  Component: NextPageWithLayoutType;
};
