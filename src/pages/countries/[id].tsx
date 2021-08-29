import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import { CountryItem } from '@/components/country/countryItem'

type PostPageProps = {
  code: string
}

const PostPage: NextPage<PostPageProps> = ({ code }) => {
  return (
    <div>
      <h1>POST</h1>
      <CountryItem codeName={code} />
      <hr />
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  )
}

PostPage.getInitialProps = ({ query }: NextPageContext) => {
  return { code: String(query) }
}

export default PostPage
