import { gql } from '@apollo/client'

export const COUNTRIES_QUERY = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`

export type CountryData = {
  countries: CountryParamsType[]
}
