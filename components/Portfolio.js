import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import Image from 'next/image'
import { Container } from '../styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
  }
`
const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  width: calc(51.7% - 3.2rem);
  position: relative;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    width: 100%;
  }
`
const PlayButton = styled.img`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const PreviousWork = ({ path }) => {
  const [vid1, setVid1] = useState(false)
  const [vid2, setVid2] = useState(false)
  const [vid3, setVid3] = useState(false)
  const [vid4, setVid4] = useState(false)

  return (
    <Container id={path}>
      <Wrapper>
        <h2>Portfolio</h2>
        <VideoWrapper>
          <ImageWrapper>
            {/* Lightbox area start */}
            <FsLightbox
              toggler={vid1}
              sources={['https://www.youtube.com/watch?v=vy5Asfw3YsM']}
            />
            <FsLightbox
              toggler={vid2}
              sources={['https://www.youtube.com/watch?v=Z3_jhEh3coc']}
            />
            <FsLightbox
              toggler={vid3}
              sources={['https://www.youtube.com/watch?v=QXtod4bnMJc']}
            />
            <FsLightbox
              toggler={vid4}
              sources={['https://www.youtube.com/watch?v=qIwIvH5HYg8']}
            />
            {/* Lightbox area end */}
            {/* Image 1 start */}
            <Image
              onClick={() => setVid1(!vid1)}
              src='/video-1.png'
              width={448}
              height={268.8}
            />
            <PlayButton onClick={() => setVid1(!vid1)} src='/play-button.svg' />
          </ImageWrapper>
          {/* Image 1 end */}
          {/* Image 2 start */}
          <ImageWrapper>
            <Image
              onClick={() => setVid2(!vid2)}
              src='/video-1.png'
              width={448}
              height={268.8}
            />
            <PlayButton onClick={() => setVid2(!vid2)} src='/play-button.svg' />
          </ImageWrapper>
          {/* Image 2 end */}
          {/* Image 3 start */}
          <ImageWrapper>
            <Image
              onClick={() => setVid3(!vid3)}
              src='/video-1.png'
              width={448}
              height={268.8}
            />
            <PlayButton onClick={() => setVid3(!vid3)} src='/play-button.svg' />
          </ImageWrapper>
          {/* Image 3 end */}
          {/* Image 4 start */}
          <ImageWrapper>
            <Image
              onClick={() => setVid4(!vid4)}
              src='/video-1.png'
              width={448}
              height={268.8}
            />
            <PlayButton onClick={() => setVid4(!vid4)} src='/play-button.svg' />
          </ImageWrapper>
          {/* Image 4 end */}
        </VideoWrapper>
      </Wrapper>
    </Container>
  )
}

export default PreviousWork
