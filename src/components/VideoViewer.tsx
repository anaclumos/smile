import React from 'react'
import styled from 'styled-components'
import { Video } from '../interfaces'

type Props = {
  video: Video
}

const VideoViewer = ({ video: video }: Props) => {
  return (
    <div>
      <QuestionHeader>{video.title}.</QuestionHeader>
      {video.desc}
      <iframe
        width="768"
        height="432"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

const QuestionHeader = styled.h1``

export default VideoViewer
