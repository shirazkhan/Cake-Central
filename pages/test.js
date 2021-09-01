import React, {useEffect} from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';

import { client } from '../apollo-client';
import { GET_PAST_LAUNCHES, GET_SHOP_TITLE } from '../graphql/Queries';

export async function getStaticProps() {

    const { data } = await client.query(GET_SHOP_TITLE);

    return {
      props: {
        shopName: data.shop.name,
      }
    }
  }

export default function Index({shopName,loading}) {
    return (
        <Content>
            <Primary>
            <p>I am Test Page for {shopName}</p>
            <Link href="/"><a>Go to homepage</a></Link>
            </Primary>
        </Content>
    )
}