import Image from 'next/image'
import React, { useState } from 'react'
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

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 0rem;
  }
`
const LogoWrapper = styled.div`
  grid-column: 2 / span 1;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / span 1;
    margin-top: 3.2rem;
  }
`
const Navigation = styled.nav`
  grid-column: 6 / span 6;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    position: absolute;
    background: black;
    height: 100vh;
    width: 100vw;
    align-content: center;
    align-items: center;

    &.hideMenu {
      transition: 0.3s all ease-in-out;
      transform: translateX(-100%);
      z-index: 2;
    }
    &.showMenu {
      transition: 0.3s all ease-in-out;
      transform: translateX(0);
      z-index: 2;
    }
  }
`
const Unlisted = styled.ul`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    flex-direction: column;
    margin-top: 40%;
  }
`
const Listed = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    padding: 6.4rem 0;
  }
`
const CTA = styled.li`
  list-style: none;
  background: ${({ theme }) => theme.color.orange};
  padding: 0.8rem 3.2rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.black};
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    margin: 6.4rem 0;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`
const CloseButton = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    z-index: 5;
  }
`

const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    display: block;
    grid-column: 4 / span 1;
    margin-top: 1.6rem;
    align-items: center;
  }
`
const Nav = () => {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Header>
      <LogoWrapper>
        <Image src='/logo.svg' width={96} height={96} />
      </LogoWrapper>
      <Navigation className={sidebar ? 'hideMenu' : 'showMenu'}>
        <Unlisted>
          <Link to='about' smooth={true} duration={1000} offset={-50}>
            <Listed onClick={showSidebar}>about</Listed>
          </Link>

          <Link to='portfolio' smooth={true} duration={1000} offset={-50}>
            <Listed onClick={showSidebar}>portfolio</Listed>
          </Link>
          <a href='mailto:hi@google.com'>
            <CTA onClick={showSidebar}>get in touch</CTA>
          </a>
        </Unlisted>
        <CloseButton>
          <Image
            src='/close.svg'
            width={48}
            height={48}
            onClick={showSidebar}
          />
        </CloseButton>
      </Navigation>
      <Hamburger>
        <Image
          src='/hamburger.svg'
          width={96}
          height={96}
          onClick={showSidebar}
        />
      </Hamburger>
    </Header>
  )
}

export default Nav
