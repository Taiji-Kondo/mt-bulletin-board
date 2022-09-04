import { DefaultSeo } from 'next-seo';
import { memo } from 'react';

import { DEFAULT_SEO } from '@/constants/siteConfig/seo';

export const BaseSEO = memo(() => {
  return <DefaultSeo {...DEFAULT_SEO} />;
});

BaseSEO.displayName = 'BaseSEO';
