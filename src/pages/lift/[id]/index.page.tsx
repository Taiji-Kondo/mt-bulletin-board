import type { NextPageWithLayoutType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Lift } from '@/components/models/lift/Lift';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const LiftPage: NextPageWithLayoutType = () => {
  const { query } = useRouter();
  const id = useMemo(() => {
    if (!query.id) return '';
    if (typeof query.id === 'string') return query.id;
    return query.id[0];
  }, [query]);

  return (
    <>
      <Lift id={id} />
    </>
  );
};

LiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default LiftPage;
