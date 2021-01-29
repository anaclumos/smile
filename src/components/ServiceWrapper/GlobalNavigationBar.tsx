import React from 'react'
import styled from 'styled-components'
const GlobalNavigationBar = () => {
  return (
    <GNB>
      <GNBContent>
        <GNBTitle>Sunghyun's Smile System</GNBTitle>
        <GNBDetail>
          <GNBLinks
            href="https://github.com/anaclumos/smile"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </GNBLinks>
        </GNBDetail>
      </GNBContent>
    </GNB>
  )
}

const GNB = styled.nav`
  width: 100%;
  position: absolute;
  background-color: #000;
  color: #fff;
  height: 5em;
  margin: auto;
`

const GNBContent = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  max-width: 100rem;
  margin: auto;
  display: flex;
`

const GNBTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 0 2rem;
  width: 60%;
`

const GNBDetail = styled.div`
  position: relative;
  margin: auto;
  right: 2rem;
`

const GNBLinks = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    opacity: 50%;
  }
`

export default GlobalNavigationBar
