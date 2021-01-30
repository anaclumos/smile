import React from 'react'
import Link from 'next/link'

import ServiceWrapper from '../components/ServiceWrapper'

const Home = () => {
  return (
    <ServiceWrapper>
      <h1>Hello World</h1>
      <Link href="/question/1">
        <a>Start Test</a>
      </Link>
    </ServiceWrapper>
  )
}

export default Home
