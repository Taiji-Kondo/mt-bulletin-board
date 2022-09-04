/**
 * @see https://github.com/garmeeh/next-seo
 */

import type { NextSeoProps } from 'next-seo';

const isProduction = process.env.ENV === 'production';

export const SITE_URL = isProduction ? 'https://localhost:3000/' : 'https://localhost:3000/';
export const SITE_NAME = isProduction ? 'Next Template' : 'Next Template(local)';
const OGP_URL = SITE_URL + 'ogp/ogp.png';

export const DEFAULT_SEO: NextSeoProps = {
  canonical: SITE_URL,
  description: 'description',
  openGraph: {
    images: [{ alt: 'ogp description', height: 1260, url: OGP_URL, width: 2400 }],
    locale: 'ja_JA',
    site_name: SITE_NAME,
    type: 'website',
    url: SITE_URL,
  },
  title: SITE_NAME,
};
