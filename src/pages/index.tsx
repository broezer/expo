import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/dist/tailwind.css';

import Card from '@/components/Card';
import Code from '@/components/Code';
import Container from '@/components/Container';
import Description from '@/components/Description';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Main from '@/components/Main';
import Title from '@/components/Title';

import { getSortedPostsData } from '../../lib/posts';

interface Post {
  date: string;
  title: string;
  id: string;
}

interface IProps {
  allPostsData: Post[];
} 

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home: NextPage<IProps> = ({allPostsData}) => {
  return (
    <>
      <Container>
        <Head>
          <title>EXPO CMD MINOR: IUXD &amp; DI</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        
        
        <Main>
          <ul className="container no-underline flex flex-wrap  justify-start">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="py-2 px-3 text-3xl hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                
              </li>
            ))}
          </ul>



          <Grid>
            
          </Grid>
        </Main>

       
      </Container>
    </>
  );
};


export default Home;
