import { Header, Title, useMantineTheme } from '@mantine/core';

export const BaseHeader = () => {
  const theme = useMantineTheme();

  return (
    <Header height={60} px={'md'} style={{ alignItems: 'center', display: 'flex' }}>
      <Title order={1} style={{ color: theme.colors.blue[5] }}>
        Next Template
      </Title>
    </Header>
  );
};
