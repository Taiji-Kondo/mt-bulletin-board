import { Loader, Stack, Text, Title } from '@mantine/core';

import { useLiftQuery } from '@/generated/graphql';

type LiftPropsType = {
  id: string;
};

export const Lift = ({ id }: LiftPropsType) => {
  const [result] = useLiftQuery({ variables: { id } });

  if (result.fetching) return <Loader />;

  const lift = result.data?.Lift;
  if (!lift) return <Text>Not found lift</Text>;

  return (
    <Stack spacing={4}>
      <Title order={1}>{lift.name}</Title>
      <Text>{lift.status}</Text>
    </Stack>
  );
};
