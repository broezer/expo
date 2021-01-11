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
            <h1 className="font-black  text-4xl w-full">Expo: Designful Innovation <span className="text-purple-600">X</span> Interface &amp; User Experience Design</h1>
            <h2 className="font-black uppercase text-xl w-full">RSVP for the Expo on thursday 21th of January</h2><br/>
            <h3 className="w-full font-semibold">11:00 - 13:00 | Livestream #1</h3>
            <h3 className="w-full font-semibold">13:00 - 15:00 | Look around and chill</h3>
            <h3 className="w-full font-semibold">15:00 - 18:00 | Livestream #2</h3>
            <p className="my-4">
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
