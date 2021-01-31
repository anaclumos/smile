import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const GlobalFooter = () => {
  return (
    <GF>
      <Link href="/.">
        <FooterLink>Home</FooterLink>
      </Link>
      <BulletSpan>•</BulletSpan>
      <Link href="/thank-you">
        <FooterLink>About</FooterLink>
      </Link>
      <BulletSpan>•</BulletSpan>
      <Link href="/privacy">
        <FooterLink>Privacy Policy</FooterLink>
      </Link>
      <BulletSpan>•</BulletSpan>
      <FooterLink
        href="https://github.com/anaclumos/smile"
        target="_blank"
        rel="noreferrer noopener"
      >
        Open Source
      </FooterLink>
      <br />
      <CopyrightWrapper>
        <Copyright
          href="https://github.com/anaclumos/smile/blob/main/LICENSEe"
          target="_blank"
          rel="noreferrer noopener"
        >
          © Sunghyun Cho 2021. All rights reserved.
        </Copyright>
      </CopyrightWrapper>
    </GF>
  )
}

const GF = styled.footer`
  max-width: 50rem;
  margin: 5rem auto;
  padding: 1rem;
  text-align: center;
  color: rgb(138, 138, 180);
  font-size: 12px;
`

const BulletSpan = styled.span`
  color: rgb(138, 138, 180);
  margin: 0 0.5rem;
`

const FooterLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: rgb(138, 138, 180);
  cursor: pointer;
  transition: opacity 200ms;
  &:active {
    opacity: 50%;
    transition: opacity 200ms;
  }
`

const Copyright = styled.a`
  font-size: 12px;
  color: rgb(138, 138, 180);
  text-decoration: none;
`

const CopyrightWrapper = styled.div`
  margin: 1rem 0;
`
export default GlobalFooter
