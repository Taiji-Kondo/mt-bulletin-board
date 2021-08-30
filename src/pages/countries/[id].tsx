import { NextPage } from 'next'
import Link from 'next/link'
import { CountryItem } from '@/components/country/countryItem'
import { useRouter } from 'next/router'

type PostPageProps = {
  code: string
}

const PostPage: NextPage<PostPageProps> = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>POST</h1>
      <CountryItem codeName={id as string} />
      <hr />
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  )
}

export default PostPage
