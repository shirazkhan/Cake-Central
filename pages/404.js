import React from 'react';
import Head from 'next/head';
import { WEBSITE_NAME } from '../GlobalVariables';

export default function PageNotFound() {
    return (
        <div>
            <Head>
  <title>Oops! The Cake Crumbled | {WEBSITE_NAME}</title>
  <meta name="description" content="Looks like this page got overbaked and isn’t on the menu. Let’s get you back to the sweet stuff!" />
  <meta name="keywords" content="404 error, page not found, cake mishap, website error" />
</Head>
            <h1>Looks like this page got overbaked or isn't on the menu. 404 Error</h1>
        </div>
    )
}
