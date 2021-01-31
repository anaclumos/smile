import React from 'react'
import Link from 'next/link'

import ServiceWrapper from '../components/ServiceWrapper'
import styled from 'styled-components'

const Home = () => {
  return (
    <ServiceWrapper>
      <h1>Need some memes?</h1>
      <SpaciousParagraphs>
        Hi! I am{' '}
        <AccentText>
          <strong>Sunghyun Cho</strong>
        </AccentText>
        .
      </SpaciousParagraphs>
      <SpaciousParagraphs>
        I have noticed that I had too many memes and videos to write on my
        app... So I created a small{' '}
        <AccentText>
          <strong>Recommendation System</strong>
        </AccentText>{' '}
        for you all. Indeed, we could all use some positivity around during this
        tough times.
      </SpaciousParagraphs>
      <SpaciousParagraphs>
        Think this as a choice-driven game like Black Mirror: Bandersnatch. You
        can always go back and choose a different choice to see a different
        ending.
      </SpaciousParagraphs>
      <SpaciousParagraphs>
        Hope everyone is doing great, and please, enjoy!
      </SpaciousParagraphs>
      <Link href="/question/1">
        <StartTestButtonATag>
          <StartTestButton>
            <StartTestButtonWrapper>Let's go!</StartTestButtonWrapper>
          </StartTestButton>
        </StartTestButtonATag>
      </Link>
    </ServiceWrapper>
  )
}

const StartTestButton = styled.div`
  border: 2px solid #2e2e3c;
  border-radius: 1rem;
  min-height: 5rem;
  margin-top: 1rem;
  padding: 1.5rem;
  transition: background-color 200ms;
  &:hover {
    transition: background-color 200ms;
    background-color: #35a353;
    cursor: pointer;
    pointer-events: auto;
  }
`

const StartTestButtonWrapper = styled.div`
  word-break: keep-all;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    pointer-events: auto;
  }
`

const StartTestButtonATag = styled.a`
  text-decoration: none;
`

const SpaciousParagraphs = styled.p`
  line-height: 1.6;
  margin: 1rem 0 0 0;
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

export default Home
