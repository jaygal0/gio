import React from 'react'
import { Container } from '../styles'
import styled from 'styled-components'

const TitleWrapper = styled.h2`
  grid-column: 4 / span 6;
`

const Title = ({ title }) => {
  return (
    <Container>
      <TitleWrapper>{title}</TitleWrapper>
    </Container>
  )
}

export default Title
