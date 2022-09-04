import { Loader, Title } from '@mantine/core';
import { Suspense } from 'react';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { useAllLiftPage } from '@/pages/lift/hooks/useAllLiftPage';

export const AllLiftPageContent = () => {
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
