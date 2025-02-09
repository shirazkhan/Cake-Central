import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import Filter from './Filter';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DESKTOP_VIEW, PRIMARY_BANNER_COLOR, PRIMARY_BUTTON_COLOR, PRIMARY_THEME_COLOR, SECONDARY_BANNER_COLOR, SECONDARY_BUTTON_COLOR } from '../../GlobalVariables';
import Button from '../core/Button';
import Breadcrumbs from '../core/Breadcrumbs';

const Container = styled.div`
    margin: 20px auto;
    width: calc(100% - 10px);

${DESKTOP_VIEW}{
    width: calc(100% - 30px);
}
`;

const Grid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    place-items: center;

    ${DESKTOP_VIEW}{
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const ProductCard = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 1em;
    justify-content: space-between;
`;

const ProductImage = styled(motion.div)`
    height: 250px;
    width: 100%;
    border-radius: 5px 5px 0 0;
    position: relative;
    overflow: hidden;

    ${DESKTOP_VIEW} {
        height: 300px;
    }
`;

const Ad = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    background: ${SECONDARY_BANNER_COLOR};

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    }

    ${DESKTOP_VIEW}{
        height: 100%;
    }
`;

const AdText = styled.h3`
    width: calc(100% - 50px);
    margin: 50px auto;
    font-size: 2em;
    line-height: 1em;
    position: relative;
    z-index: 2;
    ${DESKTOP_VIEW}{
        font-size: 2em;
    }
`;

const CardTitle = styled.div`
    padding: 5px 10px;
    line-height: 1.2em;
    font-weight: 600;
    text-align: center;
    font-size: 1.2em;
`;

const PriceAndReviewContainer = styled.div`
    display: flex;
    justify-content: center;
    width: calc(100% - 20px);
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
                <CardPrice>From £{parseFloat(p.price).toFixed(2)}</CardPrice>
            </PriceAndReviewContainer>
        </Link> 
        </ProductCard>
        )
    })

export default function ProductGrid({products, productType, reviewsOn}) {
    return (
        <Container>
            <Breadcrumbs />
            <Filter products = {products}/>
            <Grid>
                {productType === 'cakes'
                    ? <ProductCard>
                        <Ad>
                            <AdText>Prefer Something Unique? Create Your Own</AdText>
                            <Image
                                style = {{objectFit: "cover"}}
                                fill
                                src={"/AdobeStock_364652589.webp"}
                            />
                            <Button style={{zIndex: 30, position: 'relative', marginTop: '-20px'}} href={'/build-a-cake'}>Build Your Cake</Button>
                        </Ad>
                    </ProductCard>
                    : ''
                }
                {renderProducts(products, productType, reviewsOn)}
            </Grid>
        </Container>
    )
}
