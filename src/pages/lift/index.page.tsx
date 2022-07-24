import { Title } from '@mantine/core';
import type { NextPage } from 'next';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const UserPage: NextPage = () => {
  return (
    <WithHeaderLayout>
      <Title order={1}>All Lifts</Title>
      <AllLifts />
    </WithHeaderLayout>
  );
};

export default UserPage;
