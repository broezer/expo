import React, { FC } from 'react';
import styled from 'styled-components';
import 'tailwindcss/dist/tailwind.css';

import Logo from './Logo';

const FooterWrapper = styled.footer`
  min-width: 30vw;
  max-width: 30vw;
  min-height: 12vw;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 2vw rgb(0, 0, 0);
  padding: 0 2vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 55vh;
  right: 1vw;
`;

const Footer: FC = () => (
  <FooterWrapper>
    <h2 className="uppercase text-green-400 text-xs">How to</h2>
    <p className="text-base text-white font-light">Gebruik de site als portal naar projecten van de studenten.
      Via Twitch kan je de livestream volgen. Meedoen via MS Teams? Mail [a.w.hogenboom@hr.nl] om toegevoegd te worden als gast.
    </p>
  </FooterWrapper>
);
export default Footer;
