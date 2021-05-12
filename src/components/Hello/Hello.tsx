import { FC } from 'react'
import style from '@/styles/components/Hello/Hello.module.css'

type Props = {
  name: string
}

export const Hello: FC<Props> = ({ name }) => {
  return (
    <div className={style.helloContainer}>
      <h1 className={style.helloTitle}>Hello {name}!</h1>
    </div>
  )
}
