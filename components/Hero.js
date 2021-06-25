import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3.2rem;
  padding: 0 1.6rem;
  background: linear-gradient(
      136deg,
      hsla(348, 97%, 63%, 0.65),
      hsla(230, 96%, 62%, 0.65)
    ),
    url('mixer.jpg') no-repeat 50% 55% / cover;
  max-width: 204.8rem;
  height: 100vh;
  align-content: center;
  color: #ffff;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    column-gap: 1.6rem;
  }
`

const TitleWrapper = styled.div`
  grid-column: 3 / span 6;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 3 / span 8;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / span 4;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <TitleWrapper>
        <h1>Looking for the perfect score?</h1>
        <h3>Tailor made music, suitable for all types of media.</h3>
      </TitleWrapper>
    </HeroContainer>
  )
}

export default Hero
