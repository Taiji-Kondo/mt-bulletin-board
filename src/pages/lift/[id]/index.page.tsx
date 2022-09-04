import { Lift } from '@/components/models/lift/Lift';
import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { useLiftPage } from '@/pages/lift/[id]/hooks/useLiftPage';
import type { NextPageWithLayoutType } from '@/types/NextLayoutType';

const LiftPage: NextPageWithLayoutType = () => {
  const { data } = useLiftPage();

  return <Lift lift={data?.Lift} />;
};

LiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

export default LiftPage;
