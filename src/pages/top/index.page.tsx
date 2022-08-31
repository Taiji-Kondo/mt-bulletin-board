import { Button, Stack, Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';

import { BaseExternalLink } from '@/components/functional/link/BaseExternalLink';
import { BaseLink } from '@/components/functional/link/BaseLink';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const TopPage: NextPageWithLayoutType = () => {
  return (
    <>
      <Title order={1}>Top</Title>
      <Stack>
        <BaseLink href={(path) => path.lift.$url()}>
          <Button component={'a'}>All Lists</Button>
        </BaseLink>
        <BaseLink href={(path) => path.user.$url()}>
          <Button component={'a'}>User</Button>
        </BaseLink>
        <BaseLink href={(path) => path.dashboard.$url()}>
          <Button component={'a'}>Dashboard</Button>
        </BaseLink>

        <BaseExternalLink href={'https://www.google.com/'}>Google</BaseExternalLink>
      </Stack>
    </>
  );
};

TopPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default TopPage;
