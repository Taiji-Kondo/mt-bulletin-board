import { Loader, Title } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { gql } from 'urql';

import { AllLifts, AllLiftsNameFields } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { useAllLiftsPageQuery } from '@/pages/lift/index.page.generated';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

gql`
  ${AllLiftsNameFields}
  query AllLiftsPage {
    allLifts {
      ...AllLiftsNameFields
    }
  }
`;

const AllLiftPage: NextPageWithLayoutType = () => {
  const [{ data }, executeQuery] = useAllLiftsPageQuery();
  // React.lazy example
  const AllLiftsComponent = lazy(() => import('@/components/models/lift/LazyAllLifts'));

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
