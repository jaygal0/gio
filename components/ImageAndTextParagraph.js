import React from 'react'
import { Container } from '../styles'
import Button from './Button'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  display: flex;
  grid-column: 2 / span 10;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 3.2rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    grid-template-rows: repeat(2, min-content);
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column: 1 / -1;
  }
`

const ImgWrapper = styled.div`
  grid-column: 1 / span 4;
  position: relative;
  width: 100%;
  height: 50rem;
  margin-right: 3.2rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    grid-column: 1 / -1;
    grid-row: 1;
    height: 55rem;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
    grid-row: 1;
    height: 30rem;
  }
`
const TextWrapper = styled.div`
  grid-column: 5 / span 4;
  padding: 12rem 0;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    grid-column: 1 / -1;
    grid-row: 3;
    padding: 6.4rem 0;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 1.6rem 0;
  }
`

const ImageAndTextParagraph = ({
  path,
  src,
  title,
  p1,
  p2,
  p3,
  p4,
  btn,
  link,
}) => {
  return (
    <Container id={path}>
      <Wrapper>
        <ImgWrapper>
          <Image src={src} layout='fill' objectFit='cover' />
        </ImgWrapper>
        <TextWrapper>
          <h2>{title}</h2>
          <p>{p1}</p>
          <p>{p2}</p>
          <Button desc={btn} link={link} />
        </TextWrapper>
      </Wrapper>
    </Container>
  )
}

export default ImageAndTextParagraph
