import React, { useReducer, useEffect, useState} from 'react';
import '../src/index.css';
import { lightTheme, darkTheme, GlobalStyle, MainGrid,
         SocialFooter, FooterSocialLink, FooterSocialTitle,
         FooterColumn1, FooterColumn2, NewsLetterFooter, NewsLetterInput, NewsLetterButton,
         FooterLink, Footer, Content, FooterContent, HeroVideo } from '../src/styled/App';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import '../styles.css';
import client from '../apollo-client';
import { ApolloProvider } from '@apollo/client';
import useLocalStorageState from 'use-local-storage-state';
import { GET_CART } from '../graphql/Queries';
import { LOADING_BAR_COLOR, MOBILE } from '../GlobalVariables';
import NavMenu from '../components/navbar/NavMenu';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/navbar/Header';
import { useScroll, useMotionValueEvent } from "framer-motion";
import { SpeedInsights } from '@vercel/speed-insights/next';

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
  const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
  return fragment === router.asPath ? variants[0].handle : fragment
}

// Progress Bar //////////
const progress = new ProgressBar({
  size: 4,
  color: LOADING_BAR_COLOR,
  className: "bar-of-progress",
  delay: 0,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// Create Context //////////
export const GlobalStateContext = React.createContext();

const handleInitializeCart = async (globalState, dispatch, cartId) => {
  if(cartId){
    const { data } = await client.query(GET_CART(cartId));
    dispatch({type: 'INITIALIZE_CART', value: data});
  }
}

export default function MyApp({ Component, pageProps }) {

  const [cartId, setCartId] = useLocalStorageState('cartId', '');
  const [wishList, setWishList] = useLocalStorageState('wishList', []);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    dispatch({type: 'UPDATE_SCROLL_POSITION', value: latest})
  })


    // Reducer Config //////////
  const initialState = {
    nightMode: false,
    postId: 0,
    navMenuOpen: false,
    cartMenuOpen: false,
    isWishList: false,
    cartData: {
      id: cartId,
      lines: [],
      subtotal: '0.00',
      total: '0.00'
    },
    wishList: wishList,
    scrollYProgress: scrollYProgress.current
  };

  const reducer = (prevState, action) => {
    switch(action.type){
      case 'UPDATE_SCROLL_POSITION':
        return {... prevState, scrollYProgress: action.value}
      case 'TOGGLE_NIGHT_MODE':
        return {...prevState, nightMode: !prevState.nightMode};
      case 'TOGGLE_NAV_MENU':
        return {... prevState, cartMenuOpen: false, navMenuOpen: !prevState.navMenuOpen, isWishList: false};
      case 'NAV_MENU_ON':
        return {... prevState, navMenuOpen: true};
      case 'NAV_MENU_OFF':
        return {... prevState, navMenuOpen: false};
      case 'TOGGLE_CART_MENU':
        return {... prevState, navMenuOpen: false, cartMenuOpen: !prevState.cartMenuOpen, isWishList: false};
      case 'CART_MENU_OFF':
        return {... prevState, cartMenuOpen: false};
      case 'DESKTOP_CART_MENU_ON':
        return {... prevState, cartMenuOpen: !prevState.cartMenuOpen, isWishList: false};
      case 'TOGGLE_WISHLIST':
        return {... prevState, isWishList: !prevState.isWishList};
      case 'SET_WISHLIST_TRUE':
        return {... prevState, isWishList: true};
      case 'SET_WISHLIST_FALSE':
        return {...prevState, isWishList: false};
      case 'INITIALIZE_CART':
        return {...prevState, cartData: {
          id: action.value.cart.id,
            lines: action.value.cart.lines.edges.map(l => (
              {
                id: l.node.id,
                productHandle: l.node.merchandise.product.handle,
                productTitle: l.node.merchandise.product.title,
                productId: l.node.merchandise.product.id,
                productType: l.node.merchandise.product.productType,
                variantHandle: l.node.merchandise.sku,
                variantTitle: l.node.merchandise.title,
                variantId: l.node.merchandise.id,
                quantity: l.node.quantity,
                variantImageSrc: l.node.merchandise.image.src,
                price: l.node.merchandise.price.amount
              })),
            subtotal: action.value.cart.estimatedCost.subtotalAmount.amount,
            total: action.value.cart.estimatedCost.totalAmount.amount
        }};
      case 'UPDATE_CART':
        const newCart = {
          id: action.value.cart.id,
            lines: action.value.cart.lines.edges.map(l => (
              {
                id: l.node.id,
                productHandle: l.node.merchandise.product.handle,
                productTitle: l.node.merchandise.product.title,
                productId: l.node.merchandise.product.id,
                productType: l.node.merchandise.product.productType,
                variantHandle: l.node.merchandise.sku,
                variantTitle: l.node.merchandise.title,
                variantId: l.node.merchandise.id,
                quantity: l.node.quantity,
                variantImageSrc: l.node.merchandise.image.src,
                price: l.node.estimatedCost.totalAmount.amount
              })),
            subtotal: action.value.cart.estimatedCost.subtotalAmount.amount,
            total: action.value.cart.estimatedCost.totalAmount.amount
        }

        setCartId(action.value.cart.id);

        return {
          ...prevState,
          cartData: newCart
        };
      case 'ADD_TO_WISHLIST':
        const { variantId, imgSrc, price, productType, productTitle, variantTitle, productHandle, variantHandle } = action.value;

        if(prevState.wishList.find(f => f.variantId === variantId)){ // If line already exists, then just return state.
          return prevState
        }
        
        setWishList([
          ...prevState.wishList,
          {
            variantId,
            imgSrc,
            price,
            productType,
            productTitle,
            variantTitle,
            productHandle,
            variantHandle
          }
        ])

        return {
          ...prevState,
          wishList: [
            ...prevState.wishList,
            {
              variantId,
              imgSrc,
              price,
              productType,
              productTitle,
              variantTitle,
              productHandle,
              variantHandle
            }
          ]
        };
      case 'REMOVE_FROM_WISHLIST': // action.value should be filtered list.
      setWishList(action.value);
      return {
        ...prevState,
        wishList: action.value
      };
    default:
      throw new Error();
    }
  }

  const [globalState, dispatch] = useReducer(reducer,initialState);

  useEffect(() => {
    handleInitializeCart(globalState,dispatch,cartId);
  },[])


  return <ApolloProvider client={client}>
    <GlobalStateContext.Provider value = {{globalState, dispatch}}>
      <ThemeProvider theme = {globalState.nightMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MainGrid>
        <SpeedInsights />

          <Header />
            <NavMenu />
          <Content>
              {/* Content Goes Here */}
              <Component {...pageProps} />
              {/* ///////////////// */}
          </Content>
          <Footer>
          <NewsLetterFooter>
              <div>Get the latest tips, designs and offers</div>
              <div>
                <NewsLetterInput placeholder = 'Your email address' />
                <NewsLetterButton>Sign Up!</NewsLetterButton>
              </div>
            </NewsLetterFooter>
            <SocialFooter>
              <FooterSocialTitle>Follow us on social media</FooterSocialTitle>
                <div>
                  <FooterSocialLink>1</FooterSocialLink>
                  <FooterSocialLink>2</FooterSocialLink>
                  <FooterSocialLink>3</FooterSocialLink>
                  <FooterSocialLink>4</FooterSocialLink>
                </div>
            </SocialFooter>
          <FooterContent>
              <FooterColumn1>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                  FAQ
                </Link>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                  Privacy Policy
                </Link>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                  Billing and Shipping
                </Link>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                  Terms and Conditions
                </Link>
              </FooterColumn1>
              <FooterColumn2>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                  About Henna Central
                </Link>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                About Sidra Khan
                </Link>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                  Work With Us
                </Link>
                <Link href = '/' passHref style={{textDecoration:"none", color:"white", textShadow: "2px 2px 10px grey"}}>
                  Contact Us
                </Link>
              </FooterColumn2>
            </FooterContent>
          </Footer>
        </MainGrid>
      </ThemeProvider>
    </GlobalStateContext.Provider>
    </ApolloProvider>
  }