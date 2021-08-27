import { VFC } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

type PageSEOPropsType = {
  seo?: NextSeoProps
}

export const PageSEO: VFC<PageSEOPropsType> = ({ seo }) => {
  return <NextSeo {...seo} />
}
