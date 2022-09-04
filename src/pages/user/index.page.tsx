import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { UserPageContent } from '@/pages/user/index.content';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const UserPage: NextPageWithLayoutType = () => {
  return <UserPageContent />;
};

UserPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default UserPage;
