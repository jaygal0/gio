import React from 'react'
import Image from 'next/image'
import { Container } from '../styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
  padding: 3.2rem 0.8rem;
  background: hsl(0, 0%, 100%, 0.1);
  border-radius: 1.6rem;
`
const Title = styled.h3`
justify-content: center;
align-content: center;
text-align: center;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
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
            <Image src="/score-the-world.png" width={425.48} height={55.65} />
          </ImageWrapper>
          <ImageWrapper>
            <Image src="/scorelief.png" width={430.87} height={102.33} />
          </ImageWrapper>
        </LogoWrapper>
      </Wrapper>
    </Container>
  )
}

export default Featured
