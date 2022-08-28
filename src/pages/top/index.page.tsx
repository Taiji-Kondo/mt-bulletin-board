import { Button, Stack, Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';
import Link from 'next/link';

import { pagesPath } from '@/generated/path/$path';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const TopPage: NextPageWithLayoutType = () => {
  return (
    <>
      <Title order={1}>Top</Title>
      <Stack>
        <Link href={pagesPath.lift.$url()}>
          <Button>All Lists</Button>
        </Link>
        <Link href={pagesPath.user.$url()}>
          <Button>User</Button>
        </Link>
        <Link href={pagesPath.dashboard.$url()}>
          <Button>Dashboard</Button>
        </Link>
      </Stack>
    </>
  );
};

TopPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default TopPage;
