import React, { FC } from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer: FC = () => (
  <FooterWrapper>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      rel="noopener noreferrer"
      target="_blank">
      Powered by <Logo alt="Vercel Logo" src="/vercel.svg" />
    </a>
  </FooterWrapper>
);
export default Footer;
