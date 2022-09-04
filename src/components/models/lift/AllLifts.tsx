import { Box, Button, Center, Stack, Text } from '@mantine/core';
import type { OperationContext } from 'urql';
import { gql } from 'urql';

import { BaseLink } from '@/components/functional/link/BaseLink';
import type { AllLiftsNameFieldsFragment } from '@/components/models/lift/__generated__/AllLifts.generated';

export const AllLiftsNameFields = gql`
  fragment AllLiftsNameFields on Lift {
    id
    name
  }
`;

type AllLiftsPropsType = {
  data: AllLiftsNameFieldsFragment[];
  refresh: (opt?: Partial<OperationContext> | undefined) => void;
};

export const AllLifts = ({ data, refresh }: AllLiftsPropsType) => {
  const onRefresh = () => {
    console.log('refresh');
    refresh({ requestPolicy: 'network-only', suspense: true });
  };

  if (!data.length) return <Text>Not found lifts</Text>;

  return (
    <Box>
      <Stack spacing={12}>
        {data.map((lift) => (
          <BaseLink href={(path) => path.lift._id(lift.id).$url()} key={lift.id}>
            <Button variant={'subtle'}>{lift.name}</Button>
          </BaseLink>
        ))}
      </Stack>
      <Center mt={50}>
        <Button onClick={onRefresh}>Refresh</Button>
      </Center>
    </Box>
  );
};
