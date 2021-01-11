import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/dist/tailwind.css';


import Container from '@/components/Container';
import Main from '@/components/Main';



const RSVP: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>EXPO CMD MINOR: IUXD &amp; DI</title>
          <link href="/favicon.ico" rel="icon" />
          <script dangerouslySetInnerHTML={{ __html:`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/1fc8953b5692c4133f20c4bba/81a10d70870e6c19f12e0e490.js");` }} />
        </Head>
        
        
        <Main>
          <section className="container no-underline flex flex-wrap  justify-start text-white">
           
          </section>
          
        </Main>

       
      </Container>
    </>
  );
};


export default RSVP;
