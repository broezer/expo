import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head'
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import Card from '@/components/Card';
import Code from '@/components/Code';
import Container from '@/components/Container';
import Description from '@/components/Description';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Main from '@/components/Main';
import Title from '@/components/Title';


export default function Post({
    postData
  }: {
    postData: {
      title: string
      date: string
      meta: string
      contentHtml: string
    }
  }) {
    return (
      <Container>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Main>
          <h1>{postData.title}</h1>
          <h2>{postData.meta}</h2>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Main>
      </Container>
    )
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
      props: {
        postData
      }
    }
  }
