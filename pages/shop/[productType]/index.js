import React from 'react';
import { useRouter } from "next/router";

export default function ProductType() {

    const router = useRouter();
    const { productType} = router.query;

    return (
        <h1>
            {productType} Category:
        </h1>
    )
}
