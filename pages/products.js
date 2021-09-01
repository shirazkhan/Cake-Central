import React from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';

import { client } from '../apollo-client';
import { GET_SHOP_TITLE, GET_PRODUCTS } from './GraphQL/Queries';

export async function getStaticProps() {

    const { data } = await client.query(GET_PRODUCTS);

    return {
      props: {
        shopName: data.shop.name,
        products: data.shop.products.edges.map(p => {
          return {
            id: p.node.id,
            title: p.node.title,
            images: p.node.images.edges.map(img => {
              return {
                src: img.node.src,
                height: img.node.height,
                width: img.node.width
              }
            })
            }
          }
        )
      }
    }
  }

const renderProducts = productArr =>
  productArr.map(p => 
  <>
    <h4>{p.title}</h4>
    <img height = '400px' width = '400px' src = {p.images[0].src}></img>
  </>)

export default function Products({shopName,products}) {
    return (
        <Content>
            <Primary>
                <p>I am the Products Page for {shopName}</p>
                <p>Products:</p>
                {renderProducts(products)}
                <Link href="/"><a>Go to homepage</a></Link>
            </Primary>
        </Content>
    )
}