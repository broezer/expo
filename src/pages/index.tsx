import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/dist/tailwind.css';


import Container from '@/components/Container';
import Grid from '@/components/Grid';
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
          <script dangerouslySetInnerHTML={{ __html:`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/1fc8953b5692c4133f20c4bba/81a10d70870e6c19f12e0e490.js");` }} />

        </Head>
        
        
        <Main>
          <ul className="container no-underline flex flex-wrap  justify-start text-white">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="py-2 px-3 text-3xl font-medium  hover:text-purple-600 transition duration-300 ease-in-out">
                <Link href={`/team/${id}`}>
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
