import { suspenseExchange } from '@urql/exchange-suspense';
import type { ClientOptions } from 'urql';
import { cacheExchange, createClient, dedupExchange, fetchExchange } from 'urql';

export const CLIENT_OPTIONS: ClientOptions = {
  exchanges: [dedupExchange, cacheExchange, fetchExchange, suspenseExchange],
  requestPolicy: 'network-only', // TODO 検証用
  suspense: true,
  url: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
};

export const urqlClient = createClient(CLIENT_OPTIONS);
