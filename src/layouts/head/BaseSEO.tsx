import { VFC } from 'react'
import { DefaultSeo } from 'next-seo'
import { SEO } from '@/constants/SEO/seo.config'

export const BaseSEO: VFC = () => {
  return <DefaultSeo {...SEO} />
}
