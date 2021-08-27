import Link from 'next/link'
import { useQuery } from '@apollo/client'
import {
  COUNTRIES_QUERY,
  CountryData,
} from '@/repositories/graphql/queries/country/countries.query'
import { NextPage } from 'next'

export const CountryList: NextPage = () => {
  const { loading, error, data } = useQuery<CountryData>(COUNTRIES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>

  if (!data) return null
  const { countries } = data
  if (!countries) return null

  return (
    <ul>
      {countries.map(({ code, name }, index: number) => {
        return (
          <li key={index}>
            <h3>{name}</h3>
            <Link href={`/countries/${code}`}>{code}</Link>
          </li>
        )
      })}
    </ul>
  )
}
