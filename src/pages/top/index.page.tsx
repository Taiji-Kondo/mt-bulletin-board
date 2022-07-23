import type { NextPage } from 'next';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const TopPage: NextPage = () => {
  return (
    <WithHeaderLayout>
      <>Top Page</>
    </WithHeaderLayout>
  );
};

export default TopPage;
