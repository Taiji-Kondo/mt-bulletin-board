import { Button, Stack, Text } from '@mantine/core';
import Link from 'next/link';

import { useAllLiftsQuery } from '@/generated/graphql';
import { pagesPath } from '@/generated/path/$path';

export const AllLifts = () => {
  const [{ data }] = useAllLiftsQuery();

  if (!data || data.allLifts.length < 0) return <Text>Not found lifts</Text>;

  return (
    <Stack spacing={12}>
      {data.allLifts.map((lift) => (
        <Link href={pagesPath.lift._id(lift.id).$url()} key={lift.id}>
          <Button variant={'subtle'}>{lift.name}</Button>
        </Link>
      ))}
    </Stack>
  );
};
