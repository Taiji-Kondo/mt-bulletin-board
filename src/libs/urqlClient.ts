import { suspenseExchange } from '@urql/exchange-suspense';
import { cacheExchange, createClient, dedupExchange, fetchExchange } from 'urql';

export const urqlClient = createClient({
  exchanges: [dedupExchange, cacheExchange, fetchExchange, suspenseExchange],
  suspense: true,
  url: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
});
