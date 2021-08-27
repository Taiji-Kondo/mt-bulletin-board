import { VFC } from 'react'
import { DefaultSeo } from 'next-seo'
import { SEO } from '@/constants'

export const BaseSEO: VFC = () => {
  return <DefaultSeo {...SEO} />
}
