import gql from 'graphql-tag';

export type AllLiftsNameFieldsFragment = { __typename?: 'Lift'; id: string; name: string };

export const AllLiftsNameFieldsFragmentDoc = gql`
  fragment AllLiftsNameFields on Lift {
    id
    name
  }
`;
