import React from 'react'
import Image from 'next/image'
import { Container } from '../styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
`
const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`
const ImageWrapper = styled.div`
  width: calc(51.7% - 3.2rem);
  position: relative;
`
const PlayButton = styled.img`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const PreviousWork = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Portfolio</h2>
        <VideoWrapper>
          <ImageWrapper>
            <Image src='/video-1.png' width={448} height={268.8} />
            <PlayButton src='/play-button.svg' />
          </ImageWrapper>
          <ImageWrapper>
            <Image src='/video-1.png' width={448} height={268.8} />
            <PlayButton src='/play-button.svg' />
          </ImageWrapper>
          <ImageWrapper>
            <Image src='/video-1.png' width={448} height={268.8} />
            <PlayButton src='/play-button.svg' />
          </ImageWrapper>
          <ImageWrapper>
            <Image src='/video-1.png' width={448} height={268.8} />
            <PlayButton src='/play-button.svg' />
          </ImageWrapper>
        </VideoWrapper>
      </Wrapper>
    </Container>
  )
}

export default PreviousWork
