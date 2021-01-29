import React, { useCallback } from 'react'
import { AnswerButton } from '../../components/AnswerButton'
import ServiceWrapper from '../../components/ServiceWrapper'

const Evaluate = () => {
  const onClickAnswerButton = useCallback(
    (text) => () => {
      console.log(text)
    },
    []
  )

  return (
    <ServiceWrapper>
      <AnswerButton
        text={`This is a Button 1`}
        onClick={onClickAnswerButton('val')}
      />
      <AnswerButton
        text={`This is a Button 2`}
        onClick={onClickAnswerButton('val2')}
      />
    </ServiceWrapper>
  )
}

export default Evaluate
