import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { gql } from 'urql';

import { LiftsDetailFields } from '@/components/models/lift/Lift';
import { useLiftsPageQuery } from '@/pages/lift/[id]/hooks/__generated__/useLiftPage.generated';

gql`
  ${LiftsDetailFields}
  query LiftsPage($id: ID!) {
    Lift(id: $id) {
      ...LiftsDetailFields
    }
  }
`;

export const useLiftPage = () => {
  const { query } = useRouter();
  const id = useMemo(() => {
    if (!query.id) return '';
    if (typeof query.id === 'string') return query.id;
    return query.id[0];
  }, [query]);

  const [{ data }] = useLiftsPageQuery({ variables: { id } });

  return { data };
};
