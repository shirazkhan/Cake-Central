import React, {useEffect} from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';
import { client } from '../apollo-client';
import { GET_PAST_LAUNCHES, GET_SHOP_TITLE, GET_PRODUCT_BY_HANDLE } from '../graphql/Queries';

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

