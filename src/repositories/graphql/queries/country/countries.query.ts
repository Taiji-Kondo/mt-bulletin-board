import { gql } from '@apollo/client'
import { Country } from '@/models/typeCountry'

export const COUNTRIES_QUERY = gql`
  query {
    countries {
      code
      name
    }
  }
`

export interface CountryData {
  countries: Country[]
}
