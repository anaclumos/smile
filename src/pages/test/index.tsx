import React, { useCallback } from 'react'
import { AnswerButton } from '../../components/AnswerButton'
import ServiceWrapper from '../../components/ServiceWrapper'
import { buttons } from '../../data/data'

const TestForm = () => {
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

export default TestForm
