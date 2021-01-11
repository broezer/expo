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
            <h1 className="font-black uppercase text-2xl">RSVP for the Expo on thursday 21th of January</h1>
            <p>
                Want to join our Expo? And see all the wonderful work the students made. 
                RSVP via the form below. That way we can add you to our MS Teams <em>Expo Team</em>.
                So you will be able to have a chat with the designers of the future.
            </p>


            <Subscribe>

            </Subscribe>

          </section>
          
        </Main>

       
      </Container>
    </>
  );
};


export default RSVP;
