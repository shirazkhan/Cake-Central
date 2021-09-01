import React from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';

export default function Index() {

    return (
        <Content>
            <Primary>
            <p>I am Index page!</p>
            <Link href="/test"><a>Go to test</a></Link>
            </Primary>
        </Content>
    )
}
