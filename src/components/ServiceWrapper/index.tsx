import React, { ReactNode } from 'react'
import styled from 'styled-components'
import GlobalNavigationBar from './GlobalNavigationBar'
import GlobalFooter from './GlobalFooter'
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CB3E6DXP0Y"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '[Tracking ID]');
        `,
          }}
        />
      </Head>
      <GlobalNavigationBar />
      <ContentWrapper>{children}</ContentWrapper>
      <GlobalFooter />
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
