import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: 'Inter', sans-serif;
  font-size: 62.5%;
  font-weight: 400;
  letter-spacing: 0.05rem;
  background: black;
}
main {
  color: ${({ theme }) => theme.color.white};
}
h1 {
  font-size: ${({ theme }) => theme.font.desktop.h1};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h1};
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 9.6rem;
  margin-bottom: 1.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
  font-size: ${({ theme }) => theme.font.phone.h1};
  line-height: ${({ theme }) => theme.lineHeight.phone.h1};
  }
  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
  font-size: ${({ theme }) => theme.font.phone.h1Medium};
  line-height: ${({ theme }) => theme.lineHeight.phone.h1Medium};
  }
}
 
h2 {
  font-size: ${({ theme }) => theme.font.desktop.h2};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h2};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.yellow};
  font-weight: 700;
  
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
  font-size: ${({ theme }) => theme.font.phone.h2};
  line-height: ${({ theme }) => theme.lineHeight.phone.h2};
  margin-bottom: 1.6rem;
  }
}

h3 {
    font-size: ${({ theme }) => theme.font.desktop.h3};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h3};
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.6rem;
    
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
  font-size: ${({ theme }) => theme.font.phone.h3};
  line-height: ${({ theme }) => theme.lineHeight.phone.h3};
  }
}
h4 {
  font-size: ${({ theme }) => theme.font.desktop.h4};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h4};
  margin-bottom: 1.6rem;
  font-weight: 700;
  text-transform: capitalize;
}
h5 {
    font-size: ${({ theme }) => theme.font.desktop.h5};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h5};
    font-weight: 700;
    text-transform: capitalize;
    margin: 1.6rem 0;
}
h6 {
    font-size: ${({ theme }) => theme.font.desktop.h6};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h6};
    font-weight: 500;
    text-transform: capitalize;
    margin: 1.6rem 0;
    text-decoration: underline;
}
p {
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
}
a {
  color: ${({ theme }) => theme.color.green};
  text-decoration: none;
  &:hover {
  color: ${({ theme }) => theme.color.lightGreen};
  }
}
input {
  font-size: ${({ theme }) => theme.font.desktop.p};
  border-radius: 3.2rem;
  outline:none;
  border: none;
  padding: .8rem 2.4rem;
  width: 100%;
::-webkit-input-placeholder {
  color: black;
  opacity: .7;
  }
}
blockquote {
  background: ${({ theme }) => theme.color.grey};
  padding: 2.4rem;
  margin-bottom: 2.4rem;
}
blockquote p {
  margin-bottom: 1.6rem;
}
ul {
  margin-bottom: 3.2rem;
}
ul li {
font-size: ${({ theme }) => theme.font.desktop.p};
line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    list-style: none;
      }
}
`

export default GlobalStyle
