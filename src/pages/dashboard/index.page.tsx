import { Title } from '@mantine/core';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const DashboardPage: NextPageWithLayoutType = () => {
  return <Title order={1}>Dashboard</Title>;
};

DashboardPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default DashboardPage;
