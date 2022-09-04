import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { DashboardPageContent } from '@/pages/dashboard/index.content';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const DashboardPage: NextPageWithLayoutType = () => {
  return <DashboardPageContent />;
};

DashboardPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default DashboardPage;
