import { Title } from '@mantine/core';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const UserPage: NextPageWithLayoutType = () => {
  return <Title order={1}>User</Title>;
};

UserPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default UserPage;
