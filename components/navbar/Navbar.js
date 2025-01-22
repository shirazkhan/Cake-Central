import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { GlobalStateContext } from '../../pages/_app';
import CartMenu from './CartMenu';
import { NAV_BAR_COLOR, DESKTOP_VIEW, MOBILE, WEBSITE_WIDTH, DESKTOP_SCROLLED_NAV_HEIGHT, SECONDARY_THEME_COLOR, PRIMARY_BANNER_COLOR, SECONDARY_BANNER_COLOR } from '../../GlobalVariables';
import dynamic from 'next/dynamic';
import { FaInstagram } from "react-icons/fa6";

const MediaQuery = dynamic(() => import('react-responsive'), {
    ssr: false
});

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${NAV_BAR_COLOR};
    height: 100%;
    max-width: ${WEBSITE_WIDTH};
    z-index: 10;

    ${DESKTOP_VIEW} {
        width: 100%;
        justify-content: space-around;
    }
`;

const LogoBox = styled(motion.div)`
    width: 225px;
    padding: 0 10px;
    height: 85%;
    display: hidden;
    justify-content: center;
    align-items: center;

    ${DESKTOP_VIEW} {
        width: 175px;
        height: 100%;
    }
`;

const Logo = styled(motion.img)`
    width: 100%;
    height: 100%;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));

    ${DESKTOP_VIEW} {
        width: 100%;
    }
`;

const WhatsAppButton = styled.div`
    width: 150px;
    height: 30px;
    padding: 5px;
    background: ${SECONDARY_BANNER_COLOR};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    display: none;
    color: white;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.4));
    font-weight: 500;
    justify-self: flex-end;

    ${DESKTOP_VIEW} {
        display: flex;
    }
`;

const LeftButton = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${DESKTOP_VIEW} {
        display: none;
    }
`;

const HamBurger = styled(motion.img)`
    width: 25px;
    height: 25px;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
`;

const RightButton = styled.div`
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${DESKTOP_VIEW} {
        height: 38px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 25px;
    justify-content: space-evenly;
    align-items: center;

    ${DESKTOP_VIEW} {
        width: calc(${WEBSITE_WIDTH} / 4);
        height: calc(${DESKTOP_SCROLLED_NAV_HEIGHT} - 20px);
        justify-content: space-around;
    }
`;

const Cart = styled(motion.img)`
    width: 100%;
    height: 100%;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
`;

const hoverEffect = {
    initial: {
        scale: 1,
        filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))',
    },
    hover: {
        scale: 1.2,
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4))',
    },
    tap: {
        scale: 0.7,
        filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))',
    },
};

export default function NavBar() {
    const { globalState, dispatch } = useContext(GlobalStateContext);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false); // Turn off first render state after mount
    }, []);

    return (
        <>
            <Bar>
                <ButtonContainer>
                    <LeftButton onClick={() => dispatch({ type: 'TOGGLE_NAV_MENU' })}>
                        <HamBurger src={globalState.navMenuOpen ? '/menu-cross.svg' : '/menu.svg'} />
                    </LeftButton>
                </ButtonContainer>
                <LogoBox>
                    <Link href='/' passHref>
                        <MediaQuery minWidth={parseInt(MOBILE.replace('px', ''))}>
                            {globalState.scrollYProgress < 0.1 ? (
                                <Logo
                                    key="BigLogo"
                                    src='/logos/svg/CakeCentral-Logo-White-Semi.svg'
                                    initial={{ opacity: isFirstRender ? 1 : 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: isFirstRender ? 0 : 1.3 }}
                                    exit={{ opacity: 0 }}
                                    whileTap={{ scale: 0.96 }}
                                />
                            ) : (
                                <Logo
                                    key="SmallLogo"
                                    src='/logos/svg/CakeCentral-Logo-White-Small.svg'
                                    initial={{ opacity: isFirstRender ? 1 : 0 }}
                                    animate={{ opacity: 1, scale: 0.9 }}
                                    transition={{ duration: isFirstRender ? 0 : 1.3 }}
                                    exit={{ opacity: 0 }}
                                    whileTap={{ scale: 0.96 }}
                                />
                            )}
                        </MediaQuery>
                        <MediaQuery maxWidth={parseInt(MOBILE.replace('px', ''))}>
                            <Logo
                                key="SmallLogoMobile"
                                src='/logos/svg/CakeCentral-Logo-White-Small.svg'
                                initial={{ opacity: isFirstRender ? 1 : 0 }}
                                animate={{ opacity: 1, scale: 0.85 }}
                                transition={{ duration: isFirstRender ? 0 : 1.5 }}
                                exit={{ opacity: 0 }}
                                whileTap={{ scale: 0.96 }}
                            />
                        </MediaQuery>
                    </Link>
                </LogoBox>
                <ButtonContainer>
                    <RightButton onClick={() => dispatch({ type: 'DESKTOP_CART_MENU_ON' })}>
                        <Cart
                            src='/cart-icon.svg'
                            alt="Cart"
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            variants={hoverEffect}
                        />
                    </RightButton>
                </ButtonContainer>
            </Bar>
            <CartMenu />
        </>
    );
}
