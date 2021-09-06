import { gql } from '@apollo/client'

export const COUNTRY_QUERY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      phone
      emoji
    }
  }
`

export type CountryData = {
  country: Required<CountryParamsType>
}
