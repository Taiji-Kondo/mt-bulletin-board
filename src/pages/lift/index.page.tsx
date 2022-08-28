import { Loader, Title } from '@mantine/core';
import type { NextPageWithLayoutType } from 'next';
import { withUrqlClient } from 'next-urql';
import { lazy, Suspense } from 'react';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';
import { CLIENT_OPTIONS } from '@/libs/urqlClient';

const AllLiftPage: NextPageWithLayoutType = () => {
  // React.lazy example
  const AllLiftsComponent = lazy(() => import('@/components/models/lift/LazyAllLifts'));

  return (
    <>
      <Title order={1}>All Lifts</Title>
      <Suspense fallback={<Loader />}>
        <AllLiftsComponent />
      </Suspense>
    </>
  );
};

AllLiftPage.getLayout = (page) => <WithHeaderLayout>{page}</WithHeaderLayout>;

/**
 * 現状、SuspenseのLoading表示はうまくいってない
 * exchange-suspenseの参考資料が多いがdeprecatedになっている
 * https://www.npmjs.com/package/@urql/exchange-suspense
 *
 * 参考
 * - https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs
 * - https://zenn.dev/musuke/scraps/4da80cdbe29e8a
 * - https://zenn.dev/convcha/scraps/46dc7bac6201f3#comment-19cfe2ad8a7978
 **/

export default withUrqlClient(
  () => ({
    url: CLIENT_OPTIONS.url,
  }),
  { ssr: true }
)(AllLiftPage);
