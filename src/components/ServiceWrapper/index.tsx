import React from 'react'
import styled from 'styled-components'
import GlobalNavigationBar from './GlobalNavigationBar'

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <Layout>
      <GlobalNavigationBar />
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  )
}

export default ServiceWrapper

const Layout = styled.main`
  height: 100%;
  justify-content: center;
  background-color: #ffffff;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
