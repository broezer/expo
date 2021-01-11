import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/dist/tailwind.css';


import Container from '@/components/Container';
import Main from '@/components/Main';
import Subscribe from '@/components/Subscribe';


const RSVP: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>EXPO CMD MINOR: IUXD &amp; DI</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        
        
        <Main>
          <section className="container no-underline flex flex-wrap  justify-start text-white">
          <Subscribe>

          </Subscribe>

          </section>
          
        </Main>

       
      </Container>
    </>
  );
};


export default RSVP;
