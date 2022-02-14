import React, { Children } from 'react'
import { Header } from './'
type Props = {
  children: object
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
