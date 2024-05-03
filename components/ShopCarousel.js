import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { MOBILE, PRIMARY_THEME_COLOR } from '../GlobalVariables';
import { inView, motion, useScroll, useAnimate } from "framer-motion";

const cardWidth = 315;
const cardHeight = 350;

//margin-top should be 25px
const Container = styled.div`
    white-space: nowrap;
    padding-bottom: 25px;
    overflow: hidden;

    @media (min-width:${MOBILE}){
        margin: 0 60px;
      }
`;

const Title = styled.h3`
    margin: 0px 15px;
    padding: 0;
    font-size: 1.5em;
    color: pink;
    text-shadow: 1px 1px 1px lightgrey;
`;

const SubTitle = styled.h4`
    margin: 0 15px;
    padding: 0;
    font-size: 0.9em;
`;

const CardsContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const Cards = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    };

    @media (min-width:${MOBILE}){

    }
`;

const CardContainer = styled.div`
    height: ${cardHeight}px;
    width: ${cardWidth}px;
    display: flex;
    flex-direction: column;
    margin: 15px;
    flex-shrink: 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    
`;

const CardImage = styled(Image)`
    height: 100%;
    object-fit: cover;
`;

const CardInfo = styled.div`
    height: 120px;
    width: 100%;
    z-index: 333;
    position: relative;
    margin-top: -120px;
    backdrop-filter: blur(10px);
    background: rgba(255,192,203,0.6);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-shadow: 2px 2px 5px grey;
`;

const CardInfoTitle = styled.h3`
    color: white;
    width: 90%;
    margin: 15px auto;
`;

const CardInfoDescription = styled.div`
    color: white;
    margin: 15px 20px;
    font-size: 0.85em;
    display: block;
    white-space: normal;
    line-height: 23px;
`;

const CardInfoLink = styled.div`
    color: white;
    width: 90%;
    margin: 15px auto;
`;

const EndCard = styled.div`
    height: 140px;
    width: 140px;
    color: white;
    background: ${PRIMARY_THEME_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
    flex-shrink: 0;
    border-radius: 200px;
    overflow: hidden;
    text-shadow: 2px 2px 5px grey;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const EndPiece = styled.div`
    height: 1px;
    width: 1px;
    margin: 15px;
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;


const SliderMenuContainer = styled.div`
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
`;

const SliderMenu = styled.div`
    display: inline-block;
`;

const LeftButton = styled(motion.div)`
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    height: 100%;
    width: 70px;
    z-index: 9999999;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 100%);
    align-items: center;
`;

const RightButton = styled(motion.div)`
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;
    z-index: 9999999;
    background: white;
    background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 100%);
    align-items: center;
`;

const Button = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: ${PRIMARY_THEME_COLOR};
    border: 0.5px solid grey;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export default function ShopCarousel({data, title, subtitle, handle, cardType, endCard}) {

    const cardsContainerRef = useRef(null);

    const { scrollXProgress } = useScroll({ container: cardsContainerRef });

    const handleScrollLeft = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollLeft -= 1000; // Adjust the scroll amount as needed
        }
    };

    const handleScrollRight = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollLeft += 1000; // Adjust the scroll amount as needed
        }
    };

    const renderCards = () =>
      data.map((node,b) =>
        <Link key={b} href={`/shop/${node.handle}/`}>
            <CardContainer>
                <CardImage priority={b === 0 ? true : false} fill={false} alt={node.description} height={cardHeight} width={cardWidth} src = {`/${node.img}`} />
                <CardInfo>
                    <CardInfoTitle>{node.title}</CardInfoTitle>
                    <CardInfoDescription>{node.description}</CardInfoDescription>
                    <CardInfoLink></CardInfoLink>
                </CardInfo>
            </CardContainer>
        </Link>
  )

  const [leftVisibility, setLeftVisibility] = useState(false);
  const [rightVisibility, setRightVisibility] = useState(true);
  const handleScroll = () => {
    if(scrollXProgress.current >= 0.1){
        setLeftVisibility(true);
    } else{
        setLeftVisibility(false)
    }
    if(scrollXProgress.current <= 0.9){
        setRightVisibility(true);
    } else {
        setRightVisibility(false);
    }
  }

  const [scopeL, animateL] = useAnimate();
  const [scopeR, animateR] = useAnimate();

  useEffect(() => {
    // This "li" selector will only select children
    // of the element that receives `scope`.
    if(scrollXProgress.current >= 0.1){
        animateL("button", { opacity: 1 })
        animateL(scopeL.current, { opacity: 1 })
    } else {
        animateL("button", { opacity: 0 })
        animateL(scopeL.current, { opacity: 0 })
    }
    if(scrollXProgress.current <= 0.9){
        animateR("button", { opacity: 1 })
        animateR(scopeR.current, { opacity: 1 })
    } else {
        animateR("button", { opacity: 0 })
        animateR(scopeR.current, { opacity: 0 })
    }
  })

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <CardsContainer>
                        <LeftButton
                            ref={scopeL}
                        >
                            <Button onClick={handleScrollLeft}>{'<'}</Button>
                        </LeftButton>
                        <RightButton
                            ref={scopeR}
                        >
                            <Button onClick={handleScrollRight}>{'>'}</Button>
                        </RightButton>
                    <Cards onScroll={() => handleScroll()} ref={cardsContainerRef}>    
                        {renderCards()}
                        <EndCard>Shop More</EndCard>
                        <EndPiece />
                    </Cards>
                </CardsContainer>
            </Container>
        </>
    )
}
