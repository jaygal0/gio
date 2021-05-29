import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: ${({ theme }) => theme.color.orange};
  padding: 0.8rem 6.4rem;
  border-radius: 0.5rem;
`

const Button = ({ desc, link }) => {
  return (
    <a href={link}>
      <Btn>{desc}</Btn>
    </a>
  )
}

export default Button
