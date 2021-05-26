import React from 'react'
import { Container } from '../styles'
import Button from './Button'
import styled from 'styled-components'
import Image from 'next/image'

const TextWrapper = styled.div`
  grid-column: 5 / span 4;
`

const Wrapper = styled.div`
  display: flex;
  grid-column: 3 / span 8;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 3.2rem;
`

const ImgWrapper = styled.div`
  grid-column: 1 / span 4;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 3.2rem;
`

const ImageAndText = ({ src, title, text, btn }) => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Image src={src} layout='fill' objectFit='cover' />
        </ImgWrapper>
        <TextWrapper>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button desc={btn} />
        </TextWrapper>
      </Wrapper>
    </Container>
  )
}

export default ImageAndText
