import React from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';
import { client } from '../apollo-client';
import { GET_PRODUCTS_BY_COLLECTION_HANDLE } from '../graphql/queries.js';

const renderProducts = productArr =>
productArr.map(p => 
    <Link key = {p.id} href = {`/shop/${p.productType}/${p.slug}`} >
        {p.title} - £{p.price}
            <img height = '400px' width = '400px' src = {p.images[0].src}></img>
        
    </Link>
  )
  
  export default function Products({products}) {

      return (
          <Content>
            <Primary>
                <h2>HEADER</h2>

                {renderProducts(products)}
                <Link href="/">Go to homepage</Link>
            </Primary>
        </Content>
    )
}

export async function getStaticProps() {

    let { data } = await (client.query(GET_PRODUCTS_BY_COLLECTION_HANDLE('birthday-cakes')));
    console.log('1111111111111')
    console.log(data.collectionByHandle.products.nodes[0].images.nodes[0]);
    console.log('1111111111111111')
    return {
      props: {
        products: data.collectionByHandle.products.nodes.map(p => {
            return {
                id: p.id,
                title: p.title,
                slug: p.handle,
                productType: p.productType.toLowerCase().replace(/ /g, "-"),
                price: p.priceRange.minVariantPrice.amount,
                images: p.images.nodes.map(img => {
                    return {
                        id: img.id,
                        src: img.src
                    }
                })
            }
        }
        )
      }
    }
  }