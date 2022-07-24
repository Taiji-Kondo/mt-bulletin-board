import type { NextPage } from 'next';

import { AllLifts } from '@/components/models/lift/AllLifts';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const UserPage: NextPage = () => {
  return (
    <WithHeaderLayout>
      <>User Page</>
      <AllLifts />
    </WithHeaderLayout>
  );
};

export default UserPage;
