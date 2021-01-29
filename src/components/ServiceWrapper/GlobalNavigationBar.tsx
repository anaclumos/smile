import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import GitHubLogo from './GitHubLogo.svg?inline'

const GlobalNavigationBar = () => {
  return (
    <GNB>
      <GNBContent>
        <GNBTitle>
          <Link href="/">
            <GNBHomeLink>
              <AccentText>sunghyun</AccentText>✨'s smile system
            </GNBHomeLink>
          </Link>
        </GNBTitle>
        <GNBDetail>
          <GNBSocialLinks
            href="https://github.com/anaclumos/smile"
            target="_blank"
            rel="noreferrer noopener"
          >
            {<StyledGitHubLogo /> ? <StyledGitHubLogo /> : 'GitHub'}
          </GNBSocialLinks>
        </GNBDetail>
      </GNBContent>
    </GNB>
  )
}

const GNB = styled.nav`
  width: 100%;
  background-color: #17171e;
  height: 5em;
  margin: auto;
  border-bottom: 1px solid #2e2e3c;
  transition: 200ms;
`

const StyledGitHubLogo = styled(GitHubLogo)`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`

const GNBContent = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  max-width: 50rem;
  margin: auto;
  display: flex;
`

const GNBTitle = styled.h1`
  font-size: 1.5rem;
  margin: auto auto auto 1rem;
  width: 50%;
`

const GNBDetail = styled.div`
  position: relative;
  margin: auto 1rem auto auto;
`

const GNBHomeLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: opacity 200ms;
  &:active {
    opacity: 50%;
    transition: opacity 200ms;
  }
`

const GNBSocialLinks = styled.a`
  text-decoration: none;
  transition: opacity 200ms;
  &:active {
    opacity: 50%;
    transition: opacity 200ms;
  }
`

const AccentText = styled.span`
  background: linear-gradient(
    to right,
    #e5dcdd,
    #ddc7ee,
    #bcd8ed,
    #e2ccf0,
    #e7cceb,
    #e7cceb,
    #d4ccf5,
    #dfbef7,
    #f1c3e8
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export default GlobalNavigationBar
