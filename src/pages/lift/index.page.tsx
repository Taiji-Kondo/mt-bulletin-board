import { Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const LiftPage: NextPageWithLayoutType = () => {
  return (
    <>
      <Title order={1}>All Lifts</Title>
      <AllLifts />
    </>
  );
};

LiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default LiftPage;
