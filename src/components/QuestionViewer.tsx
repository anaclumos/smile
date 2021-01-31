import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Answer, Question } from '../interfaces'

type Props = {
  question: Question
}

const QuestionViewer = ({ question: question }: Props) => {
  return (
    <div>
      <QuestionHeader>Q.</QuestionHeader>
      {question.contents.map((el: string) => {
        return <Paragraph key={`key-${el}`}>{el}</Paragraph>
      })}
      <br />
      {question.answers.map((el: Answer) => {
        return (
          <div key={`key-${el.id}-${el.result}`}>
            {el.result ? (
              <Link href={`../video/${el.result}`}>
                <UnstyledLinks>
                  <AnswerOption>
                    <AnswerWrapper>{el.content}</AnswerWrapper>
                  </AnswerOption>
                </UnstyledLinks>
              </Link>
            ) : (
              <Link href={`./${el.nextQuestion}`}>
                <UnstyledLinks>
                  <AnswerOption>
                    <AnswerWrapper>{el.content}</AnswerWrapper>
                  </AnswerOption>
                </UnstyledLinks>
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

const QuestionHeader = styled.h1``
const Paragraph = styled.p`
  font-size: 20px;
  margin-top: 1rem;
  line-height: 1.6;
`
const AnswerOption = styled.div`
  border: 2px solid #2e2e3c;
  border-radius: 1rem;
  min-height: 5rem;
  margin-top: 1rem;
  padding: 1.5rem;
  transition: background-color 200ms;
  &:hover {
    transition: background-color 200ms;
    background-color: #2e2e3c;
    cursor: pointer;
    pointer-events: auto;
  }
`

const AnswerWrapper = styled.div`
  word-break: keep-all;
  width: 90%;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    pointer-events: auto;
  }
`

const UnstyledLinks = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

export default QuestionViewer
