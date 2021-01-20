import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/dist/tailwind.css';


import Container from '@/components/Container';
import Main from '@/components/Main';


import { getSortedPostsData } from '../../lib/posts';
import { getSortedDIPostsData } from '../../lib/di-posts';


interface Post {
  date: string;
  title: string;
  id: string;
}

interface IProps {
  allPostsData: Post[];
  allDIPostsData: Post[];
} 

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const allDIPostsData = getSortedDIPostsData()
  return {
    props: {
      allPostsData,
      allDIPostsData
    }
  }
}



const Home: NextPage<IProps> = ({allPostsData, allDIPostsData}) => {
  return (
    <>
      <Container>
        <Head>
          <title>EXPO CMD MINOR: IUXD &amp; DI</title>
          <link href="/favicon.ico" rel="icon" />

        </Head>
        
        
        <Main>

        <section className="container max-w-full" dangerouslySetInnerHTML={{ __html: 

        `
        <!--
        <div class="twitch">
          <div class="twitch-video">
            <iframe
              src="https://player.twitch.tv/?channel=010bruce&parent=localhost&autoplay=true"
              frameborder="0"
              scrolling="no"
              allowfullscreen="true"
              height="100%"
              width="100%">
            </iframe>
          </div>
  
        </div>

        --!>

        `
         
         
         }} />

          <h2 className="text-purple-600 uppercase text-sm font-black">Interface &amp; User Experience Design</h2>
          <ul className="container no-underline flex flex-wrap  justify-start text-white mb-10">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="py-2 px-3 text-3xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                
              </li>
            ))}
          </ul>
          <h2 className="text-purple-600 uppercase text-sm font-black">Designful Innovation</h2>
          <ul className="container no-underline flex flex-wrap  justify-start text-white">
            {allDIPostsData.map(({ id, title }) => (
              <li key={id} className="py-2 px-3 text-xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/student/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                
              </li>
            ))}
          </ul>
        </Main>

       
      </Container>
    </>
  );
};


export default Home;
