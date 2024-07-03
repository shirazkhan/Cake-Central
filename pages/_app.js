import React, { useReducer, useEffect } from 'react';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import '../src/index.css';
import { lightTheme, darkTheme, GlobalStyle, MainGrid, FooterLink,
         FooterColumn, Content, FooterContent } from '../src/styled/App';
import { ThemeProvider } from 'styled-components';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import '../styles.css';
import client from '../apollo-client';
import { ApolloProvider } from '@apollo/client';
import useLocalStorageState from 'use-local-storage-state';
import { GET_CART } from '../graphql/Queries';
import { DEV_MODE, LOADING_BAR_COLOR, MOBILE } from '../GlobalVariables';
import NavMenu from '../components/navbar/NavMenu';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/navbar/Header';
import { useScroll, useMotionValueEvent } from "framer-motion";
import { SpeedInsights } from '@vercel/speed-insights/next';
import AnnouncementBanner from '../components/index/AnnouncementBanner';
import Cookies from '../components/general/Cookies';
import Footer from '../components/general/Footer';
import WhyChooseCakeCentral from '../components/WhyChooseCakeCentral'
import WhatsAppIcon from '../components/WhatsappIcon';
import ComingSoon from '../components/ComingSoon';

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

const handleInitializeCart = async (globalState, dispatch, cartId, setCartId) => {
  if(cartId){
    const { data } = await client.query(GET_CART(cartId));
    if(data.cart === null){
      setCartId('');
      dispatch({type: 'RESET_CART'});
    } else {
      dispatch({type: 'INITIALIZE_CART', value: data});
    }
  }
}

export default function MyApp({ Component, pageProps }) {

  const [cartId, setCartId] = useLocalStorageState('cartId', '');
  const [wishList, setWishList] = useLocalStorageState('wishList', []);

  const { scrollYProgress } = useScroll();

  const isDesktop = useMediaQuery({ query: `(min-width:${MOBILE})` });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    dispatch({type: 'UPDATE_SCROLL_POSITION', value: latest});
  })

  useEffect(() => {
    dispatch({type: 'UPDATE_ISDESKTOP', value: isDesktop});
  },[isDesktop])


    // Reducer Config //////////
  const initialState = {
    nightMode: false,
    postId: 0,
    navMenuOpen: false,
    cartMenuOpen: false,
    isWishList: false,
    cartData: {
      id: '',
      lines: [],
      subtotal: '0.00',
      total: '0.00'
    },
    wishList: wishList,
    scrollYProgress: 0,
    isDesktop: isDesktop
  };

  const reducer = (prevState, action) => {
    switch(action.type){
      case 'UPDATE_SCROLL_POSITION':
        return {... prevState, scrollYProgress: action.value}
      case 'UPDATE_ISDESKTOP':
        return {... prevState, isDesktop: action.value}
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
      case 'RESET_CART':
        return {...prevState, cartData: {
          id: '',
          lines: [],
          subtotal: '0.00',
          total: '0.00'
        } };
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
    handleInitializeCart(globalState,dispatch,cartId,setCartId);
  },[])


  return !DEV_MODE ? <>
  <GoogleTagManager gtmId="GTM-PZ7XW3FT" />
  <ApolloProvider client={client}>
    <GlobalStateContext.Provider value = {{globalState, dispatch}}>
      <ThemeProvider theme = {globalState.nightMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <SpeedInsights />
          <Header />
          { /* <AnnouncementBanner /> */ }
        <MainGrid>
            <NavMenu />
            <WhatsAppIcon />
          <Content>
              <Component {...pageProps} />
            <WhyChooseCakeCentral />
          </Content>
        </MainGrid>
        <Footer />
      </ThemeProvider>
    </GlobalStateContext.Provider>
    </ApolloProvider>
    </> : <ComingSoon />
  }