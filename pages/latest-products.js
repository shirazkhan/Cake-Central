import React from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';
import { client } from '../apollo-client';
import { GET_PRODUCTS_BY_COLLECTION_HANDLE } from '../graphql/Queries';

export async function getStaticProps() {

    const { data } = await client.query(GET_PRODUCTS_BY_COLLECTION_HANDLE('latest-stuff'));

    return {
      props: {
        products: data.shop.collectionByHandle.products.edges.map(p => {
            return {
                id: p.node.id,
                title: p.node.title,
                slug: p.node.handle,
                productType: p.node.productType.toLowerCase(),
                price: p.node.priceRange.minVariantPrice.amount,
                images: p.node.images.edges.map(img => {
                    return {
                        id: img.node.id,
                        src: img.node.src
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
    <Link key = {p.id} href = {`/shop/[productType]/[slug]`} as = {`/shop/${p.productType}/${p.slug}`}>
        <a>{p.title} - £{p.price}
            <img height = '400px' width = '400px' src = {p.images[0].src}></img>
        </a>
    </Link>
  )

export default function Products({shopName,products}) {
    return (
        <Content>
            <Primary>
                <h2>HEADER</h2>
                {renderProducts(products)}
                <Link href="/"><a>Go to homepage</a></Link>
            </Primary>
        </Content>
    )
}