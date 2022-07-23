import type { NextSeoProps } from 'next-seo';
import { NextSeo } from 'next-seo';
import { memo } from 'react';

export const PageSEO = memo((seoProps: NextSeoProps) => {
  return <NextSeo {...seoProps} />;
});

PageSEO.displayName = 'PageSEO';
