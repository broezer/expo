import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'tailwindcss/dist/tailwind.css';

import Container from '@/components/Container';
import Video from '@/components/Video';
import Twitchi from '@/components/Twitchi';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    background: black;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  iframe {
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#FF00FF'
  }
};



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Video src="https://player.vimeo.com/external/494532882.hd.mp4?s=ad7ca70b1861433a0ac257cd5965d72db4fd2daf&profile_id=175" />
        
        <Twitchi src="https://player.twitch.tv/?channel=010bruce&parent=localhost&parent=expo-di.iuxd.nl&autoplay=true"></Twitchi>
       
        <Component {...pageProps}  />
      
      </ThemeProvider>
    </>
  );
}
