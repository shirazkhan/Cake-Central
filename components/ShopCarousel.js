import React, {useState, useEffect, useRef, useContext} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR } from '../GlobalVariables';
import { inView, motion, useScroll, useAnimate } from "framer-motion";
import { GlobalStateContext } from '../pages/_app';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const cardWidth = 250;
const cardHeight = 290;

//margin-top should be 25px
const Container = styled.div`
    white-space: nowrap;
    padding-bottom: 25px;
    overflow: hidden;

    ${DESKTOP_VIEW}{
        margin: 0 60px;
      }
`;

const Title = styled.h3`
    margin: 0px 25px;
    padding: 0;
    font-size: 1.5em;
    color: ${PRIMARY_THEME_COLOR};
    text-shadow: 1px 1px 1px lightgrey;
`;

const SubTitle = styled.h4`
    margin: 0 25px;
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

    ${DESKTOP_VIEW}{

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
    z-index: 4;
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
    display: none;
    left: 0;
    top: 0;
    height: 100%;
    width: 70px;
    z-index: 5;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 100%);
    align-items: center;
    padding-left: 20px;
    ${DESKTOP_VIEW}{
        display: flex;
    }
`;

const RightButton = styled(motion.div)`
    position: absolute;
    display: none;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;
    z-index: 5;
    background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 100%);
    align-items: center;
    padding-right: 20px;
    ${DESKTOP_VIEW}{
        display: flex;
    }
`;

const Button = styled(motion.button)`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    border: none;
    background: ${SECONDARY_THEME_COLOR};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function ShopCarousel({data, title, subtitle, handle, cardType, endCard}) {

    const { dispatch, globalState } = useContext(GlobalStateContext);

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

    const renderButtons = () => {
        return <>
            <LeftButton ref={scopeL}>
            <Button
                onClick={handleScrollLeft}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 1}}
            ><FaArrowLeft color='white' size={20}/>
            </Button>
        </LeftButton>
        <RightButton ref={scopeR}>
            <Button
                onClick={handleScrollRight}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 1}}
            ><FaArrowRight color={'white'} size={20}/>
            </Button>
        </RightButton></>
    }

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <CardsContainer>
                    {renderButtons()}
                    <Cards onScroll={() => handleScroll()} ref={cardsContainerRef}>    
                        {renderCards()}
                        <EndPiece />
                    </Cards>
                </CardsContainer>
            </Container>
        </>
    )
}
