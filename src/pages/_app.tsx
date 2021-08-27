import '@/styles/reset.css'
import '@/styles/globals.css'
import { VFC, Fragment } from 'react'
import { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: process.env.API_URL,
  cache,
})

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </Fragment>
  )
}

export default MyApp
