import React, { useCallback } from 'react'
import { AnswerButton } from '../../components/AnswerButton'
import ServiceWrapper from '../../components/ServiceWrapper'

const buttons = [
  {
    text: 'button1text',
    func: () => console.log(1),
  },
  {
    text: 'button2text',
    func: () => console.log(2),
  },
  {
    text: 'button3text',
    func: () => console.log(3),
  },
  {
    text: 'button4text',
    func: () => console.log(4),
  },
  {
    text: 'button5text',
    func: () => console.log(5),
  },
]

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
