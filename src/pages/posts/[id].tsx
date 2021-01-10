import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import 'tailwindcss/dist/tailwind.css';

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
          
          <Link href="/">
            <a>
              <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/>
              </svg>
            </a>
          </Link>

          <h1>{postData.title}</h1>
          <h2>{postData.meta}</h2>
          <div className="container max-100" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
