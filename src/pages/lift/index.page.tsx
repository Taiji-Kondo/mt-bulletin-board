import { Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const AllLiftPage: NextPageWithLayoutType = () => {
  return (
    <>
      <Title order={1}>All Lifts</Title>
      <AllLifts />
    </>
  );
};

AllLiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default AllLiftPage;
