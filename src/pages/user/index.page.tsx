import type { NextPage } from 'next';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const UserPage: NextPage = () => {
  return (
    <WithHeaderLayout>
      <>User Page</>
    </WithHeaderLayout>
  );
};

export default UserPage;
