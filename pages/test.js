import React from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';

export default function Index() {
    return (
        <Content>
            <Primary>
            <p>I am Test Page</p>
            <Link href="/"><a>Go to homepage</a></Link>
            </Primary>
        </Content>
    )
}
