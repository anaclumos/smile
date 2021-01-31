import React from 'react'
import styled from 'styled-components'
import ServiceWrapper from '../components/ServiceWrapper'

const ThankYouPage = () => {
  return (
    <ServiceWrapper>
      <h1>Thank you for trying this out!</h1>
      <SpaciousParagraphs>
        Thank you so much for spending your time on this! I hope you enjoyed. I
        have this project fully open-sourced on{' '}
        <span>
          <a
            href="https://github.com/anaclumos/smile"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </span>{' '}
        so please check that out if you'd like to! For example, you can peek
        through the list of every{' '}
        <span>
          <a
            href="https://github.com/anaclumos/smile/blob/main/src/data/questions.ts"
            target="_blank"
            rel="noreferrer noopener"
          >
            Questions
          </a>
        </span>{' '}
        or{' '}
        <span>
          <a
            href="https://github.com/anaclumos/smile/blob/main/src/data/videos.ts"
            target="_blank"
            rel="noreferrer noopener"
          >
            Videos
          </a>
        </span>{' '}
        .
      </SpaciousParagraphs>
      <SpaciousParagraphs>
        I hope the best for all of you. Then until next time...
      </SpaciousParagraphs>
      <SpaciousParagraphs>
        Sincerely,
        <br />
        <AccentText>
          <strong>Sunghyun Cho</strong>
        </AccentText>
      </SpaciousParagraphs>
    </ServiceWrapper>
  )
}

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

export default ThankYouPage
