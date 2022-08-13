import { Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const UserPage: NextPageWithLayoutType = () => {
  return <Title order={1}>User</Title>;
};

UserPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default UserPage;
