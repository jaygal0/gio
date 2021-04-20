import React from 'react'
import Image from 'next/image'
import { Container } from '../styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 4 / span 6;
`
const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`
const ImageWrapper = styled.div`
  width: 47%;
`
const PlayButton = styled.img``

const PreviousWork = () => {
  return (
    <Container>
      <Wrapper>
        <h3>previous work</h3>
        <VideoWrapper>
          <ImageWrapper>
            <Image src="/video-1.png" width={448} height={268.8} />
            <PlayButton src="/play-button.png" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src="/video-1.png" width={448} height={268.8} />
          </ImageWrapper>
          <ImageWrapper>
            <Image src="/video-1.png" width={448} height={268.8} />
          </ImageWrapper>
          <ImageWrapper>
            <Image src="/video-1.png" width={448} height={268.8} />
          </ImageWrapper>
        </VideoWrapper>
      </Wrapper>
    </Container>
  )
}

export default PreviousWork
