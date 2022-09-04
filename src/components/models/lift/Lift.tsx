import { Stack, Text, Title } from '@mantine/core';
import { gql } from 'urql';

import type { LiftsDetailFieldsFragment } from '@/components/models/lift/__generated__/Lift.generated';

export const LiftsDetailFields = gql`
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

type LiftPropsType = {
  lift: LiftsDetailFieldsFragment | undefined;
};

export const Lift = ({ lift }: LiftPropsType) => {
  if (!lift) return <Text>Not found lift</Text>;

  return (
    <Stack spacing={4}>
      <Title order={1}>{lift.name}</Title>
      <Text>{lift.status}</Text>
    </Stack>
  );
};
