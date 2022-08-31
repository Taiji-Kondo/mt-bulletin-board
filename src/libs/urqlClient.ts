import { suspenseExchange } from '@urql/exchange-suspense';
import type { ClientOptions } from 'urql';
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssr = ssrExchange({
  isClient: !isServerSide,
});

export const CLIENT_OPTIONS: ClientOptions = {
  exchanges: [dedupExchange, cacheExchange, fetchExchange, suspenseExchange, ssr],
  suspense: true,
  url: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
};

export const urqlClient = createClient(CLIENT_OPTIONS);
