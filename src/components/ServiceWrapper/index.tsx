import React from 'react'
import styled from 'styled-components'

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <Layout>
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  )
}

export default ServiceWrapper

const Layout = styled.main`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
