import React, { useCallback } from 'react'
import ServiceWrapper from '../../components/ServiceWrapper'
import { AnswerButton } from '../../components/AnswerButton'
import { buttons } from '../../data/data'
import { Question, StatusViewer } from '../../components/Question'
import { exportStorage, storage } from '../../data/storage'

const TestForm = () => {
  const useExportStorage = useCallback(() => {
    const storageStatus = exportStorage()
    console.log(storageStatus)
    return storageStatus
  }, [storage])
  return (
    <ServiceWrapper>
      <StatusViewer status={useExportStorage()} />
      <Question />
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
