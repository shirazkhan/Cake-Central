import React from 'react'
import {Primary, Secondary} from '../src/styled/App';
import {PageHeading} from '../src/styled/Content';
import axios from 'axios';
import parse from 'html-react-parser';
import Link from 'next/link';

export default function Articles({data}) {
        
    return (
        <>
          <Primary>
            <PageHeading>All Articles</PageHeading>
            <ul>
                {data.map(post => {
                    return <li key = {post.id} >
                                <Link href = {`/article/${post.slug}`} as = {`article/${post.slug}`} ><a>{post.title.rendered}</a></Link>
                            </li>
                })}
            </ul>
          </Primary>
        </>
    )
}

export async function getStaticProps() {
    const res = await axios(
    'https://www.bakedbyanintrovert.com/wp-json/wp/v2/posts/?_fields=id,slug,title&per_page=50',
    );
    const data = res.data;

    return {
      props: {
        data
      },
    }
  }
