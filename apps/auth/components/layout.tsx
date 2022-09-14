import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="h-full">
      {children}
    </div>
  </div>
)

export default Layout
