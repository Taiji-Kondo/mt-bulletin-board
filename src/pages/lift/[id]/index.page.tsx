import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { LiftPageContent } from '@/pages/lift/[id]/index.content';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const LiftPage: NextPageWithLayoutType = () => {
  return <LiftPageContent />;
};

LiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default LiftPage;
