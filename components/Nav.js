import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Header = styled.header`
  position: absolute;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3.2rem;
  padding: 0 1.6rem;
  max-width: 204.8rem;
  margin-top: 9.6rem;
`
const Navigation = styled.nav`
  grid-column: 6 / span 5;
`
const Unlisted = styled.ul`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`
const Listed = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.color.yellow};
`
const CTA = styled.li`
  list-style: none;
  background: ${({ theme }) => theme.color.orange};
  padding: 0.8rem 2.4rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.black};
`

const Nav = () => {
  return (
    <Header>
      <Navigation>
        <Unlisted>
          <Link to='about' smooth={true} duration={1000} offset={-50}>
            <Listed>about</Listed>
          </Link>

          <Link to='portfolio' smooth={true} duration={1000} offset={-50}>
            <Listed>portfolio</Listed>
          </Link>
          <Link href='mailto:hi@joshuagalinato.com'>
            <CTA>get in touch</CTA>
          </Link>
        </Unlisted>
      </Navigation>
    </Header>
  )
}

export default Nav
