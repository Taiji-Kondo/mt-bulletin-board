import { ReactNode, VFC } from 'react'

type HasChild = {
  children: ReactNode
}

export const BaseLayout: VFC<HasChild> = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
