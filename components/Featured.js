import React from 'react'
import Image from 'next/image'
import { Container } from '../styles'
import styled from 'styled-components'

// TODO: Giovi send featured in logos
// TODO: Giovi send copy for 'About us'
// TODO: Giovi send photo of himself or from Unsplash.com
// TODO: Giovi Finalise the 4/6 best videos/soundcloud and provide all the links and images for them
// TODO: Josh add text to the bottom of the videos
// TODO: Josh look into embedding Soundcloud files
// TODO: Josh Send Giovi GF Logos

const Wrapper = styled.div`
  grid-column: 3 / span 8;
  padding: 3.2rem 0.8rem;
  background: hsl(0, 0%, 100%, 0.1);
  border-radius: 1.6rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
  }
`
const Title = styled.h3`
  justify-content: center;
  align-content: center;
  text-align: center;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  margin: 1.6rem;
`

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Featured in</Title>
        <LogoWrapper>
          <ImageWrapper>
            <Image src='/score-the-world.png' width={425.48} height={55.65} />
          </ImageWrapper>
          <ImageWrapper>
            <Image src='/scorelief.png' width={430.87} height={102.33} />
          </ImageWrapper>
        </LogoWrapper>
      </Wrapper>
    </Container>
  )
}

export default Featured
