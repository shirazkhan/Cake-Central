import React from 'react';
import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <p>INDEX PAGE</p>
            <Link href="/test"><a>Go to test</a></Link>
        </div>
    )
}
