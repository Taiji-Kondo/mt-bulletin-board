import { Button, Text } from '@mantine/core';
import type { FallbackProps } from 'react-error-boundary';
import { Heading } from 'tabler-icons-react';

export const ErrorBoundaryFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <Heading>error</Heading>
      <Text>{error.message}</Text>
      <Button onClick={resetErrorBoundary}>Reload</Button>
    </>
  );
};
