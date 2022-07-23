import { createClient } from 'urql';

export const urqlClient = createClient({
  suspense: true,
  url: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
});
