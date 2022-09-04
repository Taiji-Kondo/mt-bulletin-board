import gql from 'graphql-tag';
import * as Urql from 'urql';

import { LiftsDetailFieldsFragmentDoc } from '../../../components/models/lift/Lift.generated';
import type * as Types from '../../../types/graphql/graphqlTypes.generated';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LiftsPageQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type LiftsPageQuery = {
  Lift: {
    __typename?: 'Lift';
    capacity: number;
    elevationGain: number;
    id: string;
    name: string;
    night: boolean;
    status?: Types.LiftStatus | null;
    trailAccess: Array<{ __typename?: 'Trail'; id: string; name: string }>;
  };
  __typename?: 'Query';
};

export const LiftsPageDocument = gql`
  query LiftsPage($id: ID!) {
    Lift(id: $id) {
      ...LiftsDetailFields
    }
  }
  ${LiftsDetailFieldsFragmentDoc}
`;

export function useLiftsPageQuery(options: Omit<Urql.UseQueryArgs<LiftsPageQueryVariables>, 'query'>) {
  return Urql.useQuery<LiftsPageQuery, LiftsPageQueryVariables>({ query: LiftsPageDocument, ...options });
}
