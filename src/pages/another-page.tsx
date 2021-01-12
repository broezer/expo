import { NextPage } from 'next';
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

const AnotherPage: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Another page</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>

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
            <Link href="/" passHref>
              <Card>
                <h3>With styled-components</h3>
                <p>This page, but styled-components </p>
              </Card>
            </Link>
          </Grid>
        </Main>

        <Footer />
      </Container>
    </>
  );
};
export default AnotherPage;
