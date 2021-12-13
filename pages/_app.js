import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {AppMainContainer, LeftContainer, RightContainer } from './AppStyle';
import './tailwind.css';



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppMainContainer>
          <LeftContainer></LeftContainer>
          <RightContainer><Component {...pageProps} /></RightContainer>
        </AppMainContainer>
      </ThemeProvider>
    </>
  )
}
