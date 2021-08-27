import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import { COUNTRY_QUERY, CountryData } from '@/repositories/graphql/queries/country/country.query'

type PostItemPropsType = {
  codeName: string
}

export const CountryItem: NextPage<PostItemPropsType> = ({ codeName }) => {
  const { loading, error, data } = useQuery<CountryData>(COUNTRY_QUERY, {
    variables: { code: codeName },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>

  if (!data) return null
  const { country } = data
  if (!country) return null

  const { name, code } = country

  return (
    <div>
      <h2>{name}</h2>
      <p>{code}</p>
    </div>
  )
}
