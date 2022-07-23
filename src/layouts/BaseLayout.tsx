import type { ReactElement } from 'react';

type BaseLayoutPropsType = {
  children: ReactElement | ReactElement[];
};

export const BaseLayout = ({ children }: BaseLayoutPropsType) => {
  return <>{children}</>;
};
