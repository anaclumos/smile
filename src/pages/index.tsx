import React from 'react'
import styled from 'styled-components'

import ServiceWrapper from '../components/ServiceWrapper'

const Home = () => {
  return (
    <ServiceWrapper>
      <h1>Hello World</h1>
      <TestingHR />
      Testing Text
    </ServiceWrapper>
  )
}

const TestingHR = styled.hr`
  width: 100%;
  background-color: #e5732f;
  height: 10px;
`

export default Home
