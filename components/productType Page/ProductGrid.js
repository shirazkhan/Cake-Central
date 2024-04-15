import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import Filter from './Filter';

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
    width: calc(100% - 10px);
    height: 325px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    justify-content: space-between;
`;

const ProductImage = styled.img`
    background: red;
    height: 200px;
    width: 100%;
    border-radius: 5px 5px 0 0;
`;

const CardTitle = styled.div`
    padding: 5px 10px;
    line-height: 1.2em;
    height: 30px;
`;

const PriceAndReviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const ReviewContainer = styled.div`
    padding: 0 10px;
`;

const CardPrice = styled.div`
    padding: 0 10px;
`;

const AddToCart = styled.button`
    border: 2px solid pink;
    height: 40px;
    width: calc(100% - 40px);
    margin: 10px auto;
    border-radius: 20px;
    background: white;
    color: black;
`;

export default function ProductGrid(props) {

    return (
        <Container>
            <Filter />
            <Grid>
                <ProductCard>
                    <ProductImage />
                    <CardTitle>8 Inch Chocolate Pudding Milk Cake</CardTitle>
                    <PriceAndReviewContainer>
                        <ReviewContainer>1 2 3 4 5</ReviewContainer>
                        <CardPrice>£79.99</CardPrice>
                    </PriceAndReviewContainer>
                    <AddToCart>Add To Cart</AddToCart>
                </ProductCard>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Grid>
            <Pagination />
        </Container>
    )
}
