import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { AllLiftPageContent } from '@/pages/lift/index.content';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const AllLiftPage: NextPageWithLayoutType = () => {
  return <AllLiftPageContent />;
};

AllLiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default AllLiftPage;
