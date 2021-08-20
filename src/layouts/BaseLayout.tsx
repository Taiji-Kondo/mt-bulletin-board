import { VFC } from 'react'
import { ChildrenType } from '@/types/type/Children'
import { Header } from '@/layouts/header/Header'
import { Footer } from '@/layouts/footer/Footer'
import styles from '@/styles/Home.module.css'

type BaseLayoutPropsType = {
  layout?: void
} & ChildrenType

export const BaseLayout: VFC<BaseLayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}
