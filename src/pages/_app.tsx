import { Fragment, useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import '@/styles/globals.css'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: `https://countries.trevorblades.com`,
  cache,
})

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector<HTMLElement>('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>山の掲示板</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
