import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ServiceWrapper from '../components/ServiceWrapper'

const Page404 = () => {
  return (
    <ServiceWrapper>
      <Header404>That's 404. Lost your way?</Header404>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </ServiceWrapper>
  )
}

const Header404 = styled.h1``

export default Page404
