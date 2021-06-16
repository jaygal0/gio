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
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  background: black;
}

main {
  color: ${({ theme }) => theme.color.white};
}

h1 {
  font-size: ${({ theme }) => theme.font.desktop.h1};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h1};
  font-weight: 700;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.color.yellow};

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
  color: ${({ theme }) => theme.color.yellow};
  font-weight: 700;
  margin-bottom: 1.6rem;
  
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
  font-size: ${({ theme }) => theme.font.phone.h2};
  line-height: ${({ theme }) => theme.lineHeight.phone.h2};
  margin-bottom: 1.6rem;
  }
}

h3 {
    font-size: ${({ theme }) => theme.font.desktop.h3};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h3};
    font-weight: 700;
    margin-bottom: 1.6rem;
    
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
  font-size: ${({ theme }) => theme.font.phone.h3};
  line-height: ${({ theme }) => theme.lineHeight.phone.h3};
  }
}

p {
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
}

ul, li {
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
}

button {
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  outline: none;
  border: none;
}

footer {
  margin-top: calc(9.6rem * 2);

  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
  margin-top: calc(9.6rem * 1);
  }
}

a {
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
  }
}

`
export default GlobalStyle
