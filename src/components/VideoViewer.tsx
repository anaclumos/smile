import Link from 'next/link'
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
      {video.id === 999 ? (
        <UnstyledLinks
          href={`https://youtu.be/${video.youtubeId}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GoToYouTubeButton>
            <ButtonWrapper>Go Watch it on YouTube</ButtonWrapper>
          </GoToYouTubeButton>
        </UnstyledLinks>
      ) : (
        <YouTubeIframeWrapper>
          <YouTubeIframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YouTubeIframeWrapper>
      )}
      <Link href="/thank-you">
        <InteractionButtonATag>
          <InteractionButton>
            <InteractionButtonWrapper>I like it!</InteractionButtonWrapper>
          </InteractionButton>
        </InteractionButtonATag>
      </Link>
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

const InteractionButton = styled.div`
  border: 2px solid #2e2e3c;
  border-radius: 1rem;
  min-height: 5rem;
  margin-top: 1rem;
  padding: 1.5rem;
  transition: background-color 200ms;
  &:hover {
    transition: background-color 200ms;
    background-color: #35a353;
    cursor: pointer;
    pointer-events: auto;
  }
`

const InteractionButtonWrapper = styled.div`
  word-break: keep-all;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    pointer-events: auto;
  }
`

const InteractionButtonATag = styled.a`
  text-decoration: none;
`

const VideoDesc = styled.p`
  line-break: keep-all;
  line-height: 1.6;
`

const GoToYouTubeButton = styled.div`
  border: 2px solid #2e2e3c;
  border-radius: 1rem;
  min-height: 5rem;
  margin-top: 1rem;
  padding: 1.5rem;
  transition: background-color 200ms;
  &:hover {
    transition: background-color 200ms;
    background-color: #700000;
    cursor: pointer;
    pointer-events: auto;
  }
`

const ButtonWrapper = styled.div`
  word-break: keep-all;
  width: 90%;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    pointer-events: auto;
  }
`
const UnstyledLinks = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

export default VideoViewer
