import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 0 1.6rem;
  margin-bottom: 9.6rem;
  max-width: 144rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-bottom: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
  }
`
export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 3.2rem;
  margin-top: 6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    column-gap: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    column-gap: 1.6rem;
    margin-bottom: 4.8rem;
  }
`
export const HeroGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-column-gap: 3.2rem;
  margin: 9.6rem 1.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column-gap: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    column-gap: 1.6rem;
  }
`
