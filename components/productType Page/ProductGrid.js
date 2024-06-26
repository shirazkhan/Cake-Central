import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import Filter from './Filter';
import Image from 'next/image';
import Link from 'next/link';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`

`;

const Grid = styled.div`
    height: 100%;
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 10px;
    place-items: center;
    margin: 10px auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ProductCard = styled.div`
    width: calc(100% - 5px);
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 1em;
    justify-content: space-between;
`;

const ProductImage = styled.div`
    height: 200px;
    width: 100%;
    border-radius: 5px 5px 0 0;
    position: relative;
    overflow: hidden;
`;

const CardTitle = styled.div`
    padding: 5px 10px;
    line-height: 1.2em;
    height: 50px;
`;

const PriceAndReviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`;

const ReviewContainer = styled.div`
    padding: 0 10px;
`;

const CardPrice = styled.div`
    padding: 0 10px;
    font-size: 1.1em;
    font-weight: 500;
`;

const AddToCart = styled.button`
    border: 2px solid ${PRIMARY_THEME_COLOR}60;
    height: 40px;
    width: 100%;
    background: ${PRIMARY_THEME_COLOR}20;
    color: black;
    font-weight: 500;
    font-size: 0.8em;
    border-radius: 0 0 5px 5px;
`;

const renderProducts = (products, productType, reviewsOn) =>
    products.map(p => {
        return (
            <ProductCard>
            <Link href = {`/shop/${productType}/${p.handle}`}>
            <ProductImage>
                <Image
                    style = {{objectFit: "cover"}}
                    fill src={p.images} />
            </ProductImage>
            <CardTitle>{p.title}</CardTitle>
            <PriceAndReviewContainer>
                {reviewsOn ? <ReviewContainer>1 2 3 4 5</ReviewContainer> : ''}
                <CardPrice>£{p.price}</CardPrice>
            </PriceAndReviewContainer>
        </Link> 
            <AddToCart>Add To Cart</AddToCart>
        </ProductCard>
        )
    })

export default function ProductGrid({products, productType, reviewsOn}) {
    return (
        <Container>
            <Filter products = {products}/>
            <Grid>
                {renderProducts(products, productType, reviewsOn)}
            </Grid>
        </Container>
    )
}
