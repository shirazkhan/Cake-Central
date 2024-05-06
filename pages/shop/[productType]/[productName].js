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
import {DOMAIN, WEBSITE_NAME, MOBILE, DESKTOP_VIEW, PRIMARY_THEME_COLOR} from '../../../GlobalVariables';
import { client } from '../../../apollo-client';
import { gql } from '@apollo/client';
import { GET_PRODUCT_BY_HANDLE, GET_SLUGS_BY_COLLECTION_HANDLE, GET_RECOMMENDED_PRODUCTS_BY_ID, GET_PRODUCT_AND_COLLECTION_HANDLES } from "../../../graphql/Queries";
import ProductAccordion from '../../../components/ProductAccordion';
import FavouriteButton from '../../../components/FavouriteButton';

const MainContainer = styled.div`
  ${DESKTOP_VIEW}{
    display: flex;
    margin: 50px 25px 25px 25px;
    gap: 20px;
  }
`;

const SpecContainer = styled.div`
  ${DESKTOP_VIEW}{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;
      width: 50%;
    }
`;

const AccordionContainer = styled.div`
    width: 90%;
    margin: 0 auto;

  > :first-child {
    border-bottom: 1px solid ${PRIMARY_THEME_COLOR}90;
    border-top: 1px solid ${PRIMARY_THEME_COLOR}90;
  }

  > :last-child {
    border-bottom: 1px solid ${PRIMARY_THEME_COLOR}90;
    border-top: 1px solid ${PRIMARY_THEME_COLOR}90;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    ${DESKTOP_VIEW}{
      gap: 5px;
      align-self: center;
      width: 100%;
    }
`;

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
  const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
  return fragment === router.asPath ? variants[0].handle : fragment
}

export default function Product({id,title,description,images,price,variants,productRecommendations}){

  const router = useRouter();

  const { productType, productName } = router.query;

  const [selectedVariant, setSelectedVariant] = useState(extractFragmentHandle(router, variants));
  
  return <>
    <Head>
        <title>{`${title} | ${WEBSITE_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainContainer>
      <ProductImages images = {images} variants = {variants}/>
      <SpecContainer>
        <ProductSpec title = {title} price = {price} variants = {variants} selectedVariant = {selectedVariant} setSelectedVariant = {setSelectedVariant}  />
        <ButtonsContainer>
          <BuyButton selectedVariant = {selectedVariant} variants = {variants} />
          <FavouriteButton
            variantId = {variants.find(v => v.handle === selectedVariant).id}
            productTitle = {title}
            imgSrc = {variants.find(v => v.handle === selectedVariant).image}
            price = {price}
            variantHandle = {selectedVariant}
            variantTitle = {variants.find(v => v.handle === selectedVariant).title}
            productType = {productType}
            productHandle = {productName}
          />
        </ButtonsContainer>
        <AccordionContainer>
          <ProductAccordion title = 'Description' content = {description} initial = {true} />
          <ProductAccordion title = 'Ingredients & Allergens' content = {description} />
          <ProductAccordion title = 'Delivery & Collection' content = {description} />
        </AccordionContainer>
      </SpecContainer>
    </MainContainer>
  </>
}

export async function getStaticProps({params}) {

  const { productType, productName } = params;

  const { data } = await client.query(GET_PRODUCT_BY_HANDLE(productName));

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
      handle: v.node.sku,
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
  
  const { data } = await client.query(GET_PRODUCT_AND_COLLECTION_HANDLES);

  const paths = data.collections.nodes.map(c => {
    return c.products.nodes.map(p => {
      return {
        params: {
          productType: c.handle,
          productName: p.handle
        }
      }
    })
  }).flat()

  return {
    paths,
    fallback: false
  };
}