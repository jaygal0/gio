import React from 'react'
import Image from 'next/image'
import { Container } from '../styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 2 / span 10;
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
  color: ${({ theme }) => theme.color.yellow};
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  margin: 1.6rem;
  width: 25%;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    flex-direction: column;
    width: 80%;
    margin: 2.4rem;
  }
`

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Featured in</Title>
        <LogoWrapper>
          <ImageWrapper>
            <Image
              src='/score-the-world.png'
              width={425.48}
              height={55.65}
              objectFit='cover'
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image src='/civ.png' width={1200} height={131} objectFit='cover' />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src='/scorelief.png'
              width={430.87}
              height={102.33}
              objectFit='cover'
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src='/indie-film.png'
              width={1980}
              height={1015}
              objectFit='cover'
            />
          </ImageWrapper>

          <ImageWrapper>
            <Image
              src='/spitfire.jpg'
              width={150}
              height={150}
              objectFit='cover'
            />
          </ImageWrapper>
        </LogoWrapper>
      </Wrapper>
    </Container>
  )
}

export default Featured
