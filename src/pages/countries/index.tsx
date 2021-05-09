import { NextPage } from 'next'
import CountryList from '@/components/country/countryList'

const Countries: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Countries</h1>
      <CountryList />
    </div>
  )
}

export default Countries
