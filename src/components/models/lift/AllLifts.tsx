import { Button, Stack, Text } from '@mantine/core';
import Link from 'next/link';

import { useAllLiftsQuery } from '@/generated/graphql';

export const AllLifts = () => {
  const [{ data }] = useAllLiftsQuery();

  if (!data || data.allLifts.length < 0) return <Text>Not found lifts</Text>;

  return (
    <Stack spacing={12}>
      {data.allLifts.map((lift) => (
        <Link
          href={{
            pathname: '/lift/[id]',
            query: { id: lift.id },
          }}
          key={lift.id}
        >
          <Button variant={'subtle'}>{lift.name}</Button>
        </Link>
      ))}
    </Stack>
  );
};
