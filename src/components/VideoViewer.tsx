import React from 'react'
import styled from 'styled-components'
import { Video } from '../interfaces'

type Props = {
  video: Video
}

const VideoViewer = ({ video: video }: Props) => {
  return (
    <div>
      <VideoHeader>{video.title}</VideoHeader>
      <VideoDesc>{video.desc}</VideoDesc>
      <YouTubeIframeWrapper>
        <YouTubeIframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </YouTubeIframeWrapper>
    </div>
  )
}

const VideoHeader = styled.h1`
  line-break: keep-all;
  line-height: 1.6;
`

const YouTubeIframeWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-top: 56.25%;
  position: relative;
`
const YouTubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const VideoDesc = styled.p`
  line-break: keep-all;
  line-height: 1.6;
`
export default VideoViewer
