import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../components/GlobalStyle'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
