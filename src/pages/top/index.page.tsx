import { Button, Stack, Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';

import { BaseLink } from '@/components/functional/BaseLink';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const TopPage: NextPageWithLayoutType = () => {
  return (
    <>
      <Title order={1}>Top</Title>
      <Stack>
        <BaseLink href={(path) => path.lift.$url()}>
          <Button>All Lists</Button>
        </BaseLink>
        <BaseLink href={(path) => path.user.$url()}>
          <Button>User</Button>
        </BaseLink>
        <BaseLink href={(path) => path.dashboard.$url()}>
          <Button>Dashboard</Button>
        </BaseLink>
      </Stack>
    </>
  );
};

TopPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default TopPage;
