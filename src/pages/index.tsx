import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import ServiceWrapper from '../components/ServiceWrapper'

const Home = () => {
  return (
    <ServiceWrapper>
      <h1>Hello World</h1>
      <Link href="/test">
        <a>Start</a>
      </Link>
    </ServiceWrapper>
  )
}

export default Home
