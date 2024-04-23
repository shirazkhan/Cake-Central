import React from 'react'
import {Primary, Secondary} from '../../src/styled/App';
import {PageHeading} from '../../src/styled/Content';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import WPContent from '../../WPContent';
import {DOMAIN, WEBSITE_NAME} from '../../GlobalVariables';

export default function Article({data,title,content,id}) {

  // Next JS Fallback
  // Fetch a new instance of the page. 
  // If page exists: Cache the page from now on / If page does not exist: Display Error
//   const router = useRouter()
//   if (router.isFallback) {
//     return <div>Loading...</div>
//   }

  return (
      <>
        <Head>
            {/* <title>{`${title} | ${WEBSITE_NAME}`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        </Head>
        <Primary>
          {/* <PageHeading>{title}</PageHeading> */}
              {/* <WPContent content = {content} /> */}
        </Primary>
      </>
  )
}

// export async function getStaticProps( {params} ) {

//   const { slug } = params;

//   const res = await axios(
//   `${DOMAIN}/wp-json/wp/v2/posts/?slug=${slug}`,
//   );
//   const data = res.data[0];
//   const title = res.data[0].title.rendered;
//   const content = res.data[0].content.rendered;
//   const id = res.data[0].id;

//   return {
//     props: {
//       data,
//       title,
//       content,
//       id
//     },
//     revalidate: 1
//   }
// }

// export async function getStaticPaths() {

//   const res = await axios(
//     `${DOMAIN}/wp-json/wp/v2/posts/?_fields=id,slug,title&per_page=50`,
//     );
//     const paths = res.data.map(post => (
//       { params: { slug: post.slug} }
//       )
//     );
//   return {
//     paths,
//     fallback: true
//   };
// }