import type { NextPageWithLayoutType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { gql } from 'urql';

import { Lift, LiftsDetailFields } from '@/components/models/lift/Lift';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { useLiftsPageQuery } from '@/pages/lift/[id]/index.page.generated';

gql`
  ${LiftsDetailFields}
  query LiftsPage($id: ID!) {
    Lift(id: $id) {
      ...LiftsDetailFields
    }
  }
`;

const LiftPage: NextPageWithLayoutType = () => {
  const { query } = useRouter();
  const id = useMemo(() => {
    if (!query.id) return '';
    if (typeof query.id === 'string') return query.id;
    return query.id[0];
  }, [query]);
  const [{ data }] = useLiftsPageQuery({ variables: { id } });

  return <Lift lift={data?.Lift} />;
};

LiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default LiftPage;
