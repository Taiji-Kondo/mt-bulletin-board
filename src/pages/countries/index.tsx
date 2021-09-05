import { NextPage } from 'next'
import { CountryList } from '@/components/country/CountryList'
import { Box, Container } from '@chakra-ui/react'

const Countries: NextPage = () => {
  return (
    <Container maxW="container.lg">
      <Box my={10}>
        <h1 className="text-40 font-bold">Countries</h1>
      </Box>
      <CountryList />
    </Container>
  )
}

export default Countries
