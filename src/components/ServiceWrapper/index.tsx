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
`

const ContentWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 1rem;
`
