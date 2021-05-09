import { gql } from '@apollo/client'
import { Country } from '@/models/typeCountry'

export const COUNTRY_QUERY = gql`
  query($countryCode: ID!) {
    country(code: $countryCode) {
      code
      name
    }
  }
`

export interface CountryData {
  country: Country
}
