import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Accordion = styled(motion.button)`
    cursor: pointer;
    height: 100px;
    background: none;
    padding: 0 10px;
    border: none;
    width: calc(100% - 20px);
    margin: 0 auto;
    text-align: left;
    border-bottom: 2px solid ${PRIMARY_THEME_COLOR}80;
    outline: none;
    transition: 0.4s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9em;
    font-weight: 800;
    color: black;
`;

const Panel = styled(motion.div)`
    padding: 0 15px;
    background-color: white;
    overflow: hidden;
`

const Title = styled.h2`
    font-size: 1em;
    margin: 0;
    padding: 0;
`;

const Arrow = styled(motion.img)`
    height: 20px;
    width: 20px;
    margin: 0 !important;
    display: block;
`;

const ContentContainer = styled.div`
    border-bottom: 2px solid ${PRIMARY_THEME_COLOR}80;
    padding-bottom: 20px;
`;

const Subtitle = styled.h3`
    padding: 0;
    margin: 0 0 20px 0;
    font-size: 1em;
    font-weight: 500;
`;

const ProductCard = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    margin: 10px 0;
`;

const ProductImage = styled.img`
    background: grey;
    width: 200px;
    height: 100%;
`;

const ProductSpec = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 10px;
`;

const Summary = styled.div`

`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function ProductAccordion({ title, content, initial = false }) {

    const [active,setActive] = useState(initial);

    return (
        <>
            <Accordion onClick = {() => setActive(!active)}>
                <Title>{title}</Title>
                <Arrow
                    src = {'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjOGM2OTAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHJlcXVpcmVkRXh0ZW5zaW9ucz0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48L2ZvcmVpZ25PYmplY3Q+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48cGF0aCBkPSJNMi41LDMxLjNjMC0yLjYsMS01LjEsMi45LTcuMWMzLjktMy45LDEwLjMtMy45LDE0LjIsMEw1MCw1NC41bDMwLjQtMzAuNGMzLjktMy45LDEwLjMtMy45LDE0LjIsMCAgICBjMy45LDMuOSwzLjksMTAuMywwLDE0LjJMNTcuMSw3NS44Yy0xLjksMS45LTQuNCwyLjktNy4xLDIuOXMtNS4yLTEuMS03LjEtMi45TDUuNCwzOC40QzMuNSwzNi40LDIuNSwzMy44LDIuNSwzMS4zeiI+PC9wYXRoPjwvZz48L3N3aXRjaD48L3N2Zz4='}
                    animate = {{rotate: active ? 180 : 0}}
                />
            </Accordion>
            <Panel animate={{height: active ? 'auto' : '0', marginTop: active ? '15px' : '0'}}>
                <ContentContainer>
                    <Subtitle>Arrives by Thu, 25 Apr</Subtitle>
                    <ProductCard>
                        <ProductImage />
                        <ProductSpec>
                            <div>Style: DD1391-100</div>
                            <div>Size: 10</div>
                            <div>Colour: Red</div>
                            <div>Qty: 1</div>
                            <div>Price: 109.99</div>
                        </ProductSpec>
                    </ProductCard>
                    <ProductCard>
                        <ProductImage />
                        <ProductSpec>
                            <div>Style: DD1391-100</div>
                            <div>Size: 10</div>
                            <div>Colour: Red</div>
                            <div>Qty: 1</div>
                            <div>Price: 109.99</div>
                        </ProductSpec>
                    </ProductCard>
                    <Summary>
                        <SummaryItem>
                            Subtotal<span>£109.99</span>
                        </SummaryItem>
                        <SummaryItem>
                            Estimated delivery<span>£0.00</span>
                        </SummaryItem>
                        <SummaryItem>
                            Total<span>£109.99</span>
                        </SummaryItem>
                    </Summary>
                </ContentContainer>
            </Panel>
        </>
    )
}
