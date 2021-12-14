import { createGlobalStyle } from 'styled-components';
import { AppMainContainer, LeftContainer, RightContainer } from './AppStyle';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { SideBar } from '../components/SideBar/SideBar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <GlobalStyle />
      <AppMainContainer>
        <LeftContainer>
          <SideBar />
        </LeftContainer>
        <RightContainer>
          <Component {...pageProps} />
        </RightContainer>
      </AppMainContainer>
    </ThemeProvider>
  );
}
