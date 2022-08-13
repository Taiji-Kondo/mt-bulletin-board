import { Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const TopPage: NextPageWithLayoutType = () => {
  return <Title order={1}>Top</Title>;
};

TopPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default TopPage;
