import { Box, Button, Center, Stack, Text } from '@mantine/core';

import { BaseLink } from '@/components/functional/link/BaseLink';
import { useAllLiftsQuery } from '@/generated/graphql';

export const AllLifts = () => {
  const [{ data }, executeQuery] = useAllLiftsQuery();

  const refresh = () => {
    console.log('refresh');
    executeQuery({ requestPolicy: 'network-only', suspense: true });
  };

  if (!data || data.allLifts.length < 0) return <Text>Not found lifts</Text>;

  return (
    <Box>
      <Stack spacing={12}>
        {data?.allLifts.map((lift) => (
          <BaseLink href={(path) => path.lift._id(lift.id).$url()} key={lift.id}>
            <Button variant={'subtle'}>{lift.name}</Button>
          </BaseLink>
        ))}
      </Stack>
      <Center mt={50}>
        <Button onClick={refresh}>Refresh</Button>
      </Center>
    </Box>
  );
};
