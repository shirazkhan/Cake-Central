import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { DESKTOP_VIEW, PRIMARY_BANNER_COLOR } from '../../GlobalVariables';

const Container = styled.section`
    height: 400px;
    width: 100%;
    display: flex;
    color: white;
    flex-direction: column-reverse;
    ${DESKTOP_VIEW}{
        flex-direction: row;
        height: 300px;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: ${PRIMARY_BANNER_COLOR};
    ${DESKTOP_VIEW}{
        width: 50%;
    }
`;

const Title = styled.h1`
    width: 80%;
    font-size: 2em;
    margin: 15px;
    ${DESKTOP_VIEW}{
        font-size: 3em;
        margin: 20px;
    }
`;

const Description = styled.p`
    width: 80%;
    margin: 0 0 15px 0;
`;

export default function HeroBanner({title,description,inverse,image}) {

    return (
        <Container>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
            <Content style={{position: 'relative'}}>
                <Image
                    src={image?.src}
                    fill
                    quality={1}
                    alt={image?.altText}
                    style={{objectFit: "cover"}}
                />
            </Content>
        </Container>
    )
}
