import React, { useCallback } from 'react'
import { AnswerButton } from '../../components/AnswerButton'
import ServiceWrapper from '../../components/ServiceWrapper'
import { buttons } from '../../data/data'

const Evaluate = () => {
  const onClickAnswerButton = useCallback(
    (text) => () => {
      console.log(text)
    },
    []
  )

  return (
    <ServiceWrapper>
      {buttons.map((el) => {
        return (
          <AnswerButton
            key={`key-${el.text}-${el.func}`}
            text={el.text}
            onClick={el.func}
          />
        )
      })}
    </ServiceWrapper>
  )
}

export default Evaluate
