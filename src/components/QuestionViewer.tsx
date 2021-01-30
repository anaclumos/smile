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
      <QuestionHeader>Question #{question.id}.</QuestionHeader>
      {question.content}
      <br />
      <ul>
        {question.answers.map((el: Answer) => {
          console.log(el.result)
          return (
            <li key={`key-${el.id}-${el.content}-${el.nextQuestion}`}>
              {el.result ? (
                <Link href={`../video/${el.result}`}>
                  <a>{el.content}</a>
                </Link>
              ) : (
                <Link href={`./${el.nextQuestion}`}>
                  <a>{el.content}</a>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const QuestionHeader = styled.h1``

export default QuestionViewer
