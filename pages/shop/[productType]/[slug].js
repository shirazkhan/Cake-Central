import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import {Primary, Secondary} from '../../../src/styled/App';
import ProductImages from '../../../components/productCarousel/ProductImages';
import ProductSpec from '../../../components/ProductSpec';
import BuyButton from '../../../components/BuyButton';
import Quantity from '../../../components/Quantity';
import RecommendedCarousel from '../../../components/RecommendedCarousel';
import Head from 'next/head';
import {DOMAIN, WEBSITE_NAME} from '../../../GlobalVariables';
import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';
import parse from 'html-react-parser';
import { GET_PRODUCT_BY_HANDLE, GET_SLUGS_BY_COLLECTION_HANDLE, GET_RECOMMENDED_PRODUCTS_BY_ID } from "../../../graphql/queries.js";
import ProductAccordion from '../../../components/ProductAccordion';

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
  const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
  return fragment === router.asPath ? variants[0].handle : fragment
}

export default function Product({id,title,description,images,price,variants,productRecommendations}){

  const router = useRouter();
  
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  const { productType, slug } = router.query;

  const [selectedVariant, setSelectedVariant] = useState(extractFragmentHandle(router, variants));
  
  return <>
    <Head>
        <title>{`${title} | ${WEBSITE_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Primary>
      <ProductImages images = {images} variants = {variants}/>
      <ProductSpec title = {title} price = {price} variants = {variants} selectedVariant = {selectedVariant} setSelectedVariant = {setSelectedVariant}  />
      <BuyButton selectedVariant = {selectedVariant} variants = {variants} />
      <ProductAccordion title = 'Description' content = {description} initial = {true} />
      <ProductAccordion title = 'Details' content = {description} />
      <ProductAccordion title = 'Delivery & Returns' content = {description} />
      <RecommendedCarousel products = {productRecommendations} />
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

  const variants = data.productByHandle.variants.edges.map(v => {
    return {
      id: v.node.id,
      title: v.node.title,
      image: v.node.image.src,
      handle: v.node.sku
    }
  })

  const { data:data2 } = await client.query(GET_RECOMMENDED_PRODUCTS_BY_ID(data.productByHandle.id));
  
  const productRecommendations = data2.productRecommendations ? data2.productRecommendations.map(r => {
    return {
      id: r.id,
      price: r.priceRange.minVariantPrice.amount,
      title: r.title,
      handle: r.handle,
      productType: r.productType.toLowerCase(),
      imageSrc: r.images.edges[0].node.src,
      imageId: r.images.edges[0].node.src,
      imageAltText: r.images.edges[0].node.altText
    }
  }) : ''

  return {
      props: {
        id: data.productByHandle.id,
        title: data.productByHandle.title,
        description: data.productByHandle.description,
        price: data.productByHandle.priceRange.minVariantPrice.amount,
        images,
        variants,
        productRecommendations,
        key: data.productByHandle.id
      },
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