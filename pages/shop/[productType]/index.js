import React from 'react';
import { useRouter } from "next/router";
import client from '../../../apollo-client';
import styled from 'styled-components';
import { Primary } from '../../../src/styled/App';
import ProductGrid from '../../../components/productType Page/ProductGrid';
import { GET_COLLECTIONS, GET_PRODUCTS_BY_COLLECTION_HANDLE} from '../../../graphql/Queries';
import Head from 'next/head';
import { WEBSITE_NAME, WEBSITE_WIDTH } from '../../../GlobalVariables';
import Banner from '../../../components/Banner';

const Container = styled.div`
    max-width: ${WEBSITE_WIDTH};
    margin: 0 auto;
`;

const Header = styled.h1`
    width: 100%;
    text-align: center;
`;

const Description = styled.p`
    max-width: 1000px;
    margin: auto 20px;
`;

export default function ProductType({handle, title, description, products}) {

    const router = useRouter();
    const { productType } = router.query;

    return ( <>
        <Head>
            <title>{`${title} | ${WEBSITE_NAME}`}</title>
        </Head>
        <Primary>
            <Header>{title}</Header>
            <Description>{description}</Description>
            <ProductGrid reviewsOn = {false} products = {products} productType = {productType} />
        </Primary>
    </>
    )
}

export async function getStaticProps({params}) {

    const { productType, slug } = params;
  
    let { data } = await client.query(GET_PRODUCTS_BY_COLLECTION_HANDLE(productType));
    data = data.collectionByHandle;
    const props = {
        handle: data.handle,
        title: data.title,
        description: data.description,
        products: data.products.nodes.map(p => {
            return {
                title: p.title,
                id: p.id,
                images: p.images.nodes[0].src,
                handle: p.handle,
                price: p.priceRange.minVariantPrice.amount
            }
        })
    }

    return {
        props
      }
  }

  export async function getStaticPaths() {
  
    const { data } = await client.query(GET_COLLECTIONS);

    const paths = data.collections.nodes.map(c => {
      return {
        params: {
          productType: c.handle
        } 
      }
    })
  
    return {
      paths,
      fallback: false
    };
  }