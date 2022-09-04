import { Lift } from '@/components/models/lift/Lift';
import { useLiftPage } from '@/pages/lift/[id]/hooks/useLiftPage';

export const LiftPageContent = () => {
  const { data } = useLiftPage();

  return <Lift lift={data?.Lift} />;
};
