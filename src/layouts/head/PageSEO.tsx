import { VFC } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

type PageSEOProps = {
  seo?: NextSeoProps
}

export const PageSEO: VFC<PageSEOProps> = ({ seo }) => {
  return <NextSeo {...seo} />
}
