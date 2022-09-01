import { Loader, Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';
import { Suspense } from 'react';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const AllLiftPage: NextPageWithLayoutType = () => {
  // React.lazy example
  // const AllLiftsComponent = lazy(() => import('@/components/models/lift/LazyAllLifts'));

  return (
    <>
      <Title order={1}>All Lifts</Title>
      <Suspense fallback={<Loader />}>
        <AllLifts />
        {/*<AllLiftsComponent />*/}
      </Suspense>
    </>
  );
};

AllLiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default AllLiftPage;
