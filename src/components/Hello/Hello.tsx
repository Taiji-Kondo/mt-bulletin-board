import React from 'react'

type Props = {
  name: string
}

export const Hello: React.FC<Props> = ({ name }) => {
  return <div>Hello {name}!</div>
}
