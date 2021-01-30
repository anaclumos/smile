import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Question, Answer, Video } from '../../interfaces'
import ServiceWrapper from '../../components/ServiceWrapper'
import QuestionViewer from '../../components/QuestionViewer'
import { questionData } from '../../data/questions'

type Props = {
  item?: Question
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <ServiceWrapper title={`sunghyun's smile system errored`}>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </ServiceWrapper>
    )
  }

  return (
    <ServiceWrapper title={`${item ? `Question #` + item.id : 'Question'}`}>
      {item && <QuestionViewer question={item} />}
    </ServiceWrapper>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = questionData.map((question) => ({
    params: { id: question.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = questionData.find((data) => data.id === Number(id))
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
