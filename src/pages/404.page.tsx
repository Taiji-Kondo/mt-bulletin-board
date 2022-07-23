import type { NextPage } from 'next';
import { memo } from 'react';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const NotFountPage: NextPage = memo(() => {
  return (
    <WithHeaderLayout>
      <>404 Not Found.</>
    </WithHeaderLayout>
  );
});

NotFountPage.displayName = 'NotFountPage';

export default NotFountPage;
