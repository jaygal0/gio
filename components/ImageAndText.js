import React from 'react'
import { Container } from '../styles'
import Button from './Button'
import styled from 'styled-components'
import Image from 'next/image'

const TextWrapper = styled.div`
  grid-column: 5 / span 4;
  padding: 12rem 0;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 1.6rem 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  grid-column: 3 / span 8;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 3.2rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column: 1 / -1;
  }
`

const ImgWrapper = styled.div`
  grid-column: 1 / span 4;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 3.2rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
    grid-row: 1;
  }
`

const ImageAndText = ({ path, src, title, text, btn, link }) => {
  return (
    <Container id={path}>
      <Wrapper>
        <ImgWrapper>
          <Image src={src} layout='fill' objectFit='cover' />
        </ImgWrapper>
        <TextWrapper>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button desc={btn} link={link} />
        </TextWrapper>
      </Wrapper>
    </Container>
  )
}

export default ImageAndText
