import React, { ReactNode } from 'react'
import styled from 'styled-components'
import GlobalNavigationBar from './GlobalNavigationBar'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const ServiceWrapper = ({
  children,
  title = `sunghyun's smile system`,
}: Props) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
