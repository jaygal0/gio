import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles'

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3.2rem;
  padding: 0 1.6rem;
  background-image: url('mixer.jpg');
  background-position: 50% 55%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`
const LogoWrapper = styled.div`
  grid-column: 3 / span 1;
  margin-top: 6.4rem;
`
const TitleWrapper = styled.div`
  grid-column: 3 / span 6;
`

const Hero = () => {
  return (
    <HeroContainer>
      <LogoWrapper>
        <Image src="/logo.svg" width={96} height={96} />
      </LogoWrapper>
      <TitleWrapper>
        <h1>looking for the perfect score?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
          voluptates quaerat voluptatem nisi delectus architecto.
        </p>
      </TitleWrapper>
    </HeroContainer>
  )
}

export default Hero
