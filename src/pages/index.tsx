import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { VFC } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const Home: VFC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>山の掲示板</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>main</main>

      <Footer />
    </div>
  )
}

export default Home
