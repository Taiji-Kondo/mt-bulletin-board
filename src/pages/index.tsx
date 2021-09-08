import { VFC, Fragment } from 'react'
import { BaseLayout } from '@/layouts/BaseLayout'
import { PageSEO } from '@/layouts/head/PageSEO'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

const Page: VFC = () => {
  return (
    <Fragment>
      <BaseLayout>
        <PageSEO seo={{ title: 'top' }} />
        top
        <Button colorScheme="blue">
          <Link href={`/countries`}>Country</Link>
        </Button>
      </BaseLayout>
    </Fragment>
  )
}

export default Page
