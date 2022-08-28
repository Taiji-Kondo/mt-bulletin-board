import { Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const DashboardPage: NextPageWithLayoutType = () => {
  return <Title order={1}>Dashboard</Title>;
};

DashboardPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default DashboardPage;
