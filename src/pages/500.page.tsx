import type { NextPage } from 'next';
import { memo } from 'react';

import { ErrorBoundaryFallback } from '@/layouts/ErrorBoundary/ErrorBoundaryFallback';

const ServerErrorPage: NextPage = memo(() => {
  return ErrorBoundaryFallback();
});

ServerErrorPage.displayName = 'ServerErrorPage';

export default ServerErrorPage;
