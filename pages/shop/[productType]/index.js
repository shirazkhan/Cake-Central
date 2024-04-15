import React from 'react';
import { useRouter } from "next/router";
import client from '../../../apollo-client';
import styled from 'styled-components';
import { Primary } from '../../../src/styled/App';
import ProductGrid from '../../../components/productType Page/ProductGrid';
import { InferGetStaticPropsType, GetStaticProps } from 'next';

const Container = styled.div`
    display: flex;

`;

const Header = styled.h1`
    width: 100%;
    text-align: center;
`;

const Description = styled.p`
    width: calc(100% - 40px);
    margin: 0 auto;
`;

export default function ProductType() {

    const router = useRouter();
    const { productType } = router.query;

    // productType = productType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

    return (
        <Primary>
            <Header>
                {productType}
            </Header>
            <Description>Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah 
            Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah 
            Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah 
            Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah Lorem Ipsum Blah Blah 
            </Description>
            <ProductGrid />
        </Primary>
    )
}

export async function getStaticProps({params}) {

    const { productType, slug } = params;
  
    const { data } = await client.query(GET_PRODUCT_BY_HANDLE(slug));

    return {
        props: {

        }
      }
  }

export async function getStaticPaths(handle) {
  
    const { data } = await client.query(GET_SLUGS_BY_COLLECTION_HANDLE('birthday-cakes'));
    
    const paths = data.collectionByHandle.products.edges.map(p => {
      return {
        params: {
          productType: p.node.productType.toLowerCase().replace(/ /g, "-"),
          slug: p.node.handle
        } 
      }
    })
  
    return {
      paths,
      fallback: false
    };
  }