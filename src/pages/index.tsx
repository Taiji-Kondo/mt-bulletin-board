import { VFC, Fragment } from 'react'

import { BaseLayout } from '@/layouts/BaseLayout'
import { PageSEO } from '@/layouts/head/PageSEO'

const Page: VFC = () => {
  return (
    <Fragment>
      <BaseLayout>
        <PageSEO seo={{ title: 'top' }} />
        top
      </BaseLayout>
    </Fragment>
  )
}

export default Page
