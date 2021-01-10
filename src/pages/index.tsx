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
          <Title>
            Welcome to <a href="https://nextjs.org">IUXD &amp; DI EXPO!</a>
          </Title>

          <ul className="no-underline space-y-2">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
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

        <Footer />
      </Container>
    </>
  );
};


export default Home;
