import { getAllDIPostIds, getDIPostData } from '../../../lib/di-posts';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import 'tailwindcss/dist/tailwind.css';


import Container from '@/components/Container';
import Main from '@/components/Main';
import Miro from '@/components/Miro';
import ProfilePictureDI from '@/components/ProfilePictureDI';
import Visual from '@/components/Visual';

import styles from '../../styles/Post.module.css';


export default function Post({
    postData
  }: {
    postData: {
      title: string
      date: string
      firstname: string
      lastname: string
      profile_img: string
      contentHtml: string
      miro: string
      hmw: string
      visual: string
      theme: string
      teams: string
    }
  }) {
    return (
      <Container>
        <Head>
          <title>{postData.title} | EXPO CMD MINOR: DI</title>
        </Head>
        <Main>

          <Link href="/">
            <a>
              <svg className="m-4 fill-current text-white hover:fill-current hover:text-purple-600 transition duration-300 ease-in-out" width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/>
              </svg>
            </a>
          </Link>
          <article className="container max-w-full bg-white bg-opacity-95 text-black-85 p-4 m-4 rounded-xl">
            <header className="text-center mt-10">
                <figure className="rounded-full h-40 w-40  m-auto overflow-hidden shadow-md">
                  <ProfilePictureDI src={ postData.profile_img }></ProfilePictureDI>
                </figure>
                <h1 className="text-5xl font-black uppercase text-green-400 mt-5 mb-5">{postData.firstname} {postData.lastname}</h1>
                <h2 className="text-xs mb-10 text-gray-800">
                  <span className="lowercase font-light">Theme: </span>
                  <span className="font-bold">{postData.theme}</span>
                </h2>
            </header>
            
            <section className="flex flex-wrap justify-center my-10">
                
                <h2 className="font-light italic text-xl text-gray-800 text-center w-4/5">"<span className="text-purple-600">How might we </span> <span className="font-semibold">{postData.hmw}</span>"</h2>
            </section>
          
            <section className={styles.postContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            
            <section className="flex w-3/5 justify-center m-auto my-10">
                <figure className="shadow-lg">
                  <Visual src={ postData.visual }></Visual>
                </figure>
            </section>

            <section className="flex flex-wrap justify-center my-10 w-4/5 m-auto">
              <h2 className="uppercase text-xs text-green-600 font-bold w-full mb-4 text-center">Connect with us</h2>
              <a href={postData.teams} className="w-1/3 cursor-pointer bg-white text-center mx-5 p-4 text-purple-600 rounded-md border-solid border-2 border-purple-600 hover:text-white hover:bg-purple-600 transition ease-in-out duration-300">Meet on MS Teams</a>
            </section>
            
            <section>
             <h4 className="text-xl font-black uppercase text-purple-600 my-6">Leave me some feedback, thanks :)</h4>   
              <Miro src={ postData.miro }></Miro>

            </section>
            
          </article>
          
        </Main>
      </Container>
    )
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllDIPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getDIPostData(params.id as string)
    return {
      props: {
        postData
      }
    }
  }
