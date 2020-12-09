import React from 'react';
import {MDXProvider} from '@mdx-js/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Video from '@/components/Video';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

const mdComponents = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />
}


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Video src="https://uploads.codesandbox.io/uploads/user/979de439-4f3c-445b-ab75-ec2ce2f24a5f/o61a-Neon.mp4" />
        <MDXProvider components={mdComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

