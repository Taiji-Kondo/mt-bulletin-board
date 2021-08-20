import { VFC } from 'react'
import { ChildrenType } from '@/types/type/Children'
import { Header } from '@/layouts/header/Header'
import { Footer } from '@/layouts/footer/Footer'

type BaseLayoutPropsType = {
  header: void
} & ChildrenType

export const BaseLayout: VFC<BaseLayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
