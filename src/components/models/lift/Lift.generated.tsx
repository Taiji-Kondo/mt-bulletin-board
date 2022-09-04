import gql from 'graphql-tag';

import type * as Types from '../../../types/graphql/graphqlTypes.generated';

export type LiftsDetailFieldsFragment = {
  __typename?: 'Lift';
  capacity: number;
  elevationGain: number;
  id: string;
  name: string;
  night: boolean;
  status?: Types.LiftStatus | null;
  trailAccess: Array<{ __typename?: 'Trail'; id: string; name: string }>;
};

export const LiftsDetailFieldsFragmentDoc = gql`
  fragment LiftsDetailFields on Lift {
    id
    name
    status
    capacity
    night
    elevationGain
    trailAccess {
      id
      name
    }
  }
`;
