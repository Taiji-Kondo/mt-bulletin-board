import { Loader, Title } from '@mantine/core';
import { Suspense } from 'react';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { useLiftPage } from '@/pages/lift/hooks/useLiftPage';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const AllLiftPage: NextPageWithLayoutType = () => {
  const { AllLiftsComponent, data, executeQuery } = useLiftPage();

  return (
    <>
      <Title order={1}>All Lifts</Title>
      <Suspense fallback={<Loader />}>
        <AllLifts data={data?.allLifts ?? []} refresh={executeQuery} />
        <AllLiftsComponent data={data?.allLifts ?? []} refresh={executeQuery} />
      </Suspense>
    </>
  );
};

AllLiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default AllLiftPage;
