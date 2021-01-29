import React from 'react'
import styled from 'styled-components'
const GlobalNavigationBar = () => {
  return (
    <GNB>
      <GNBContent>
        <GNBTitle>
          <AccentText>sunghyun</AccentText>✨'s
          <br />
          smile system
        </GNBTitle>
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
  color: #eee;
  font-size: 1.5rem;
  margin: 0 auto;
  width: 60%;
`

const GNBDetail = styled.div`
  position: relative;
  margin: auto;
  right: 0.5rem;
`

const GNBLinks = styled.a`
  color: #eee;
  text-decoration: none;
  transition: color 200ms ease-in-out;
  -webkit-transition: color 200ms ease-in-out;
  -moz-transition: color 200ms ease-in-out;
  -o-transition: color 200ms ease-in-out;
  -ms-transition: color 200ms ease-in-out;
  &:hover {
    color: #eee;
    transition: color 200ms ease-in-out;
    -webkit-transition: color 200ms ease-in-out;
    -moz-transition: color 200ms ease-in-out;
    -o-transition: color 200ms ease-in-out;
    -ms-transition: color 200ms ease-in-out;
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
