import { gql } from '@apollo/client'

export const COUNTRY_QUERY = gql`
  query($code: ID!) {
    country(code: $code) {
      code
      name
    }
  }
`

export type CountryData = {
  country: CountryParamsType
}
