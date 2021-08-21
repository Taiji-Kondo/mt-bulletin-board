import { gql } from '@apollo/client'

export const COUNTRIES_QUERY = gql`
  query {
    countries {
      code
      name
    }
  }
`

export type CountryData = {
  countries: CountryParamsType[]
}
