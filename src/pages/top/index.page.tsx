import { Button, Stack, Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';
import Link from 'next/link';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const TopPage: NextPageWithLayoutType = () => {
  return (
    <>
      <Title order={1}>Top</Title>
      <Stack>
        <Link href={'/lift'}>
          <Button>All Lists</Button>
        </Link>
        <Link href={'/user'}>
          <Button>User</Button>
        </Link>
        <Link href={'/dashboard'}>
          <Button>Dashboard</Button>
        </Link>
      </Stack>
    </>
  );
};

TopPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default TopPage;
