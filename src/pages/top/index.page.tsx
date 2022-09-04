import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { TopPageContent } from '@/pages/top/index.content';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const TopPage: NextPageWithLayoutType = () => {
  return <TopPageContent />;
};

TopPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default TopPage;
