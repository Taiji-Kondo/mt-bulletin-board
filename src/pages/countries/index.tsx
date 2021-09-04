import { NextPage } from 'next'
import { CountryList } from '@/components/country/CountryList'

const Countries: NextPage = () => {
  return (
    <div>
      <h1 className="text-40 font-bold">Countries</h1>
      <CountryList />
    </div>
  )
}

export default Countries
