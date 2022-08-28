import type { NextPage } from 'next';
import { memo } from 'react';

import { ErrorBoundaryFallback } from '@/layouts/ErrorBoundary/ErrorBoundaryFallback';

const ServerErrorPage: NextPage = memo(() => {
  return ErrorBoundaryFallback({ error: new Error('500'), resetErrorBoundary: () => location.reload() });
});

ServerErrorPage.displayName = 'ServerErrorPage';

export default ServerErrorPage;
