import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3.2rem;
  padding: 0 1.6rem;
  background-image: url('mixer.jpg');
  background-position: 50% 55%;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 204.8rem;
  height: 100vh;
  align-content: center;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    column-gap: 1.6rem;
    height: 80vh;
  }
`

const TitleWrapper = styled.div`
  grid-column: 3 / span 6;

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
