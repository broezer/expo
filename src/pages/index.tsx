import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Card from '@/components/Card';
import Code from '@/components/Code';
import Container from '@/components/Container';
import Description from '@/components/Description';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Main from '@/components/Main';
import Title from '@/components/Title';

import { getSortedPostsData } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

type allPostsData = {
  children: {
    date: string
    title: string
    id: string
  }
}

const Home: NextPage = ({allPostsData}) => {
  return (
    <>
      <Container>
        <Head>
          <title>Create Next App</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        
        <section>
         
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li  key={id}>
                {title}
                <br />
                {id}
                <br />
               
              </li>
            ))}
          </ul>
        </section>
        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Title>

          <Description>
            Get started by editing <Code>pages/index.js</Code>
          </Description>

          <Grid>
            <Link href="/regular-css" passHref>
              <Card>
                <h3>With CSS</h3>
                <p>This page, but CSS</p>
              </Card>
            </Link>
            <Link href="/another-page" passHref>
              <Card>
                <h3>Another page</h3>
              </Card>
            </Link>
            <Card href="https://nextjs.org/docs">
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </Card>

            <Card href="https://nextjs.org/learn">
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </Card>

            <Card href="https://github.com/vercel/next.js/tree/master/examples">
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </Card>

            <Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </Card>
          </Grid>
        </Main>

        <Footer />
      </Container>
    </>
  );
};
export default Home;
