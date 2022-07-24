import { Title } from '@mantine/core';
import type { NextPage } from 'next';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const UserPage: NextPage = () => {
  return (
    <WithHeaderLayout>
      <Title order={1}>User</Title>
    </WithHeaderLayout>
  );
};

export default UserPage;
