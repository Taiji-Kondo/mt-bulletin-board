import { Loader, Title } from '@mantine/core';
import { Suspense } from 'react';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { useAllLiftPage } from '@/pages/lift/hooks/useAllLiftPage';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const AllLiftPage: NextPageWithLayoutType = () => {
  const { AllLiftsComponent, data, executeQuery } = useAllLiftPage();

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
