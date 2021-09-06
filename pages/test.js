import React, {useEffect} from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';
import { client } from '../apollo-client';
import { GET_PAST_LAUNCHES, GET_SHOP_TITLE } from '../graphql/Queries';
import TestComponent from '../components/TestComponent';
import ProductImages from '../components/ProductImages';
import { GET_PRODUCT_BY_HANDLE } from '../graphql/Queries';

export default function Test() {

    return (
      <>
        <Content>
            <Primary>
              <p>I am Test Page</p>
              <Link href="/"><a>Go to homepage</a></Link>
            </Primary>
        </Content>
      </>
    )
}

export async function getStaticProps({params}) {

  const { data } = await client.query(GET_PRODUCT_BY_HANDLE('DKNYPURE-DRAPE-NECK-DRESS'));

  const images = data.productByHandle.images.edges.map(i => {
    return {
      id: i.node.id,
      src: i.node.src,
      altText: i.node.altText
    }
  })

  return {
      props: {
        data
      }
    }
}