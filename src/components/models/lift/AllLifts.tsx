import { Box, Loader, Stack, Text } from '@mantine/core';

import { useAllLiftsQuery } from '@/generated/graphql';

export const AllLifts = () => {
  const [result] = useAllLiftsQuery();

  if (result.fetching) return <Loader />;

  if (!result.data || result.data.allLifts.length < 0) return <Text>Not found lifts</Text>;

  return (
    <Stack spacing={12}>
      {result.data.allLifts.map((lift) => (
        <Box key={lift.id}>{lift.name}</Box>
      ))}
    </Stack>
  );
};
