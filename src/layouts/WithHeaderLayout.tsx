import type { ReactElement } from 'react';

import { BaseHeader } from '@/components/ui/BaseHeader';
import { BaseLayout } from '@/layouts/BaseLayout';

type WithHeaderLayoutPropsType = {
  children: ReactElement | ReactElement[];
};

export const WithHeaderLayout = ({ children }: WithHeaderLayoutPropsType) => {
  return (
    <BaseLayout>
      <>
        <BaseHeader />
        {children}
      </>
    </BaseLayout>
  );
};
