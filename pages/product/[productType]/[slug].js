import { useRouter } from "next/router";
import {Primary, Secondary} from '../../../src/styled/App';
import {PageHeading} from '../../../src/styled/Content';
import Head from 'next/head';
import {DOMAIN, WEBSITE_NAME} from '../../../GlobalVariables';
import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';
import parse from 'html-react-parser';

export default function Product({id,title,descriptionHtml,description}){
  const router = useRouter()
  const { productType, slug } = router.query;

  return <>
  <Head>
      <title>{`${title} | ${WEBSITE_NAME}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <Primary>
    <PageHeading>{title}</PageHeading>
    {description}
        
  </Primary>
</>
}

export async function getStaticProps({params}) {

  const { productType, slug } = params;

  const GET_PRODUCT = {
    query: gql`
      query {
        productByHandle(handle: "${slug}") {
          id
          title
          descriptionHtml
          description
        }
      }
    `
  };

  const { data } = await client.query(GET_PRODUCT);

  return {
    props: {
      id: data.productByHandle.id,
      title: data.productByHandle.title,
      descriptionHtml: data.productByHandle.descriptionHtml,
      description: data.productByHandle.description
    }
  }
}

export async function getStaticPaths() {

  const GET_SLUGS = {
    query: gql`
      {
        collectionByHandle(handle: "latest-stuff") {
          products(first: 10) {
            edges {
              node {
                title
                productType
                handle
              }
            }
          }
        }
      }
    `
  };

  const { data } = await client.query(GET_SLUGS);

  const paths = data.collectionByHandle.products.edges.map(p => {
    return {
      params: {
        productType: p.node.productType,
        slug: p.node.handle
      } 
    }
  })

  return {
    paths,
    fallback: true
  };
}