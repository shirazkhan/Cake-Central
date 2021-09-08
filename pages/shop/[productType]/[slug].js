import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import {Primary, Secondary} from '../../../src/styled/App';
import {PageHeading} from '../../../src/styled/Content';
import ProductImages from '../../../components/productCarousel/ProductImages';
import ProductSpec from '../../../components/ProductSpec';
import Head from 'next/head';
import {DOMAIN, WEBSITE_NAME} from '../../../GlobalVariables';
import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';
import parse from 'html-react-parser';
import { GET_PRODUCT_BY_HANDLE, GET_SLUGS_BY_COLLECTION_HANDLE } from "../../../graphql/queries.js";

export default function Product({id,title,description,productT,images,price}){

  const router = useRouter();
  
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  const { productType, slug } = router.query;
  
  return <>
    <Head>
        <title>{`${title} | ${WEBSITE_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Primary>
      <ProductImages images = {images}/>
      <ProductSpec title = {title} price = {price} />
      <PageHeading>{title}</PageHeading>
      {description}
          
    </Primary>
  </>
}

export async function getStaticProps({params}) {

  const { productType, slug } = params;

  const { data } = await client.query(GET_PRODUCT_BY_HANDLE(slug));

  const images = data.productByHandle.images.edges.map(i => {
    return {
      id: i.node.id,
      src: i.node.src,
      altText: i.node.altText
    }
  })

  return {
      props: {
        id: data.productByHandle.id,
        title: data.productByHandle.title,
        description: data.productByHandle.description,
        price: data.productByHandle.priceRange.minVariantPrice.amount,
        images,
      }
    }
}

export async function getStaticPaths() {
  
  const { data } = await client.query(GET_SLUGS_BY_COLLECTION_HANDLE('latest-stuff'));
  

  const paths = data.collectionByHandle.products.edges.map(p => {
    return {
      params: {
        productType: p.node.productType.toLowerCase(),
        slug: p.node.handle
      } 
    }
  })

  return {
    paths,
    fallback: false
  };
}