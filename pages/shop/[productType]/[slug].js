import { useRouter } from "next/router";
import {Primary, Secondary} from '../../../src/styled/App';
import {PageHeading} from '../../../src/styled/Content';
import Head from 'next/head';
import {DOMAIN, WEBSITE_NAME} from '../../../GlobalVariables';
import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';
import parse from 'html-react-parser';
import { GET_PRODUCT_BY_HANDLE, GET_SLUGS_BY_COLLECTION_HANDLE } from "../../../graphql/Queries";

export default function Product({id,title,descriptionHtml,description,productT}){
  const router = useRouter()
  const { productType, slug } = router.query;

  return<>
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

  const { data } = await client.query(GET_PRODUCT_BY_HANDLE(slug));

  return {
      props: {
        id: data.productByHandle.id,
        title: data.productByHandle.title,
        descriptionHtml: data.productByHandle.descriptionHtml,
        description: data.productByHandle.description,
        productT: data.productByHandle.productType.toLowerCase()
      }
    }
}

export async function getStaticPaths() {
  
  const { data } = await client.query(GET_SLUGS_BY_COLLECTION_HANDLE('latest-stuff'));

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
    fallback: false
  };
}