import gql from 'graphql-tag';
import * as Urql from 'urql';

import { AllLiftsNameFieldsFragmentDoc } from '../../components/models/lift/AllLifts.generated';
import type * as Types from '../../types/graphql/graphqlTypes.generated';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type AllLiftsPageQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AllLiftsPageQuery = {
  __typename?: 'Query';
  allLifts: Array<{ __typename?: 'Lift'; id: string; name: string }>;
};

export const AllLiftsPageDocument = gql`
  query AllLiftsPage {
    allLifts {
      ...AllLiftsNameFields
    }
  }
  ${AllLiftsNameFieldsFragmentDoc}
`;

export function useAllLiftsPageQuery(options?: Omit<Urql.UseQueryArgs<AllLiftsPageQueryVariables>, 'query'>) {
  return Urql.useQuery<AllLiftsPageQuery, AllLiftsPageQueryVariables>({ query: AllLiftsPageDocument, ...options });
}
