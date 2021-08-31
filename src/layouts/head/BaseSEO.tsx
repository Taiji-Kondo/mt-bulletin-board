import { VFC } from 'react'
import { DefaultSeo } from 'next-seo'
import { SEO_CONFIG } from '@/constants'

export const BaseSEO: VFC = () => {
  return <DefaultSeo {...SEO_CONFIG} />
}
