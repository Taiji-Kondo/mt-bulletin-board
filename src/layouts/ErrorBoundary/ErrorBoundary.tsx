import type { ComponentType, ReactElement } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

type ErrorBoundaryPropsType = Required<{
  FallbackComponent: ComponentType<FallbackProps>;
  children: ReactElement | ReactElement[];
}>;

export const ErrorBoundary = ({ FallbackComponent, children }: ErrorBoundaryPropsType) => {
  return <ReactErrorBoundary FallbackComponent={FallbackComponent}>{children}</ReactErrorBoundary>;
};
