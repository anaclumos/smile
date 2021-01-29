import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const AnswerButton = (props: Props) => {
  return (
    <AnswerButtonWrapper onClick={props.onClick}>
      {props.text}
    </AnswerButtonWrapper>
  )
}

const AnswerButtonWrapper = styled.button`
  width: 100%;
  margin: 1rem 0;
`
