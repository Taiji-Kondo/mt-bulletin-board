import { Button, Text } from '@mantine/core';
import type { FallbackProps } from 'react-error-boundary';
import { Heading } from 'tabler-icons-react';

export const ErrorBoundaryFallback = (fallback?: FallbackProps) => {
  return (
    <>
      <Heading>error</Heading>
      <Text>{fallback?.error.message}</Text>
      <Button onClick={fallback?.resetErrorBoundary}>Reload</Button>
    </>
  );
};
