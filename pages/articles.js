import React from 'react'
import {Primary, Secondary} from '../src/styled/App';
import {PageHeading} from '../src/styled/Content';
import axios from 'axios';
import parse from 'html-react-parser';
import Link from 'next/link';
import Head from 'next/head';
import {DOMAIN} from '../GlobalVariables';

export default function Articles({data}) {
        
    return (
        <>
            <Head>
                <title>All Articles | KhanDev </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Primary>
            <PageHeading>All Articles</PageHeading>
            <ul>
                {data.map(post => {
                    return <li key = {post.id} >
                                <Link href = {`/article/[slug]`} as = {`/article/${post.slug}`} ><a>{post.title.rendered}</a></Link>
                            </li>
                })}
            </ul>
            </Primary>
        </>
    )
}

export async function getStaticProps() {
    const res = await axios(
    `${DOMAIN}/wp-json/wp/v2/posts/?_fields=id,slug,title&per_page=50`,
    );
    const data = res.data;

    return {
      props: {
        data
      },
    }
  }
