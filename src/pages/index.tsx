import { VFC, Fragment } from 'react'
import { BaseLayout } from '@/layouts/BaseLayout'
import SEOHead from '@/layouts/head/SEOHead'

const Home: VFC = () => {
  return (
    <Fragment>
      <BaseLayout>
        <SEOHead />
        top
      </BaseLayout>
    </Fragment>
  )
}

export default Home
