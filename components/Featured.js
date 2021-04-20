import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <Container>
      <h3>featured in</h3>
      <LogosWrapper>
        <Image />
        <Image />
      </LogosWrapper>
    </Container>
  )
}

export default Featured
