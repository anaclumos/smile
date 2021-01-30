import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Answer, Video } from '../../interfaces'
import ServiceWrapper from '../../components/ServiceWrapper'
import QuestionViewer from '../../components/QuestionViewer'
import { videoData } from '../../data/assets'
import VideoViewer from '../../components/VideoViewer'

type Props = {
  item?: Video
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
    <ServiceWrapper title={`${item ? item.title : 'Video'}`}>
      {item && <VideoViewer video={item} />}
    </ServiceWrapper>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = videoData.map((question) => ({
    params: { id: question.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = videoData.find((data) => data.id === Number(id))
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
