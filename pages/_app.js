import React, { useReducer, useEffect} from 'react';
import '../src/index.css';
import { lightTheme, darkTheme, GlobalStyle, MainGrid, Header, NavBar, Brand, NavButton, NavUILabel, NavInputUI,
         Hamburger, NavSideMenu, NavSideMenuShadow, NavLinks, NavLink,
         NightButton, SwitchUI, SwitchInputUI, SwitchSliderUI, NavMobHFade, NavMobHSpacer,
         Footer, Content, HamburgerInner1, HamburgerInner2, NavMobHMenu, NavMobHOverflow, NavFilter, FooterContent } from '../src/styled/App';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import '../styles.css'
import client from '../apollo-client';
import { ApolloProvider } from '@apollo/client';
import useLocalStorageState from 'use-local-storage-state';

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
  const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
  return fragment === router.asPath ? variants[0].handle : fragment
}

// Progress Bar //////////
const progress = new ProgressBar({
  size: 3,
  color: "#8c6900",
  className: "bar-of-progress",
  delay: 0,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// Create Context //////////
export const GlobalStateContext = React.createContext();

export default function MyApp({ Component, pageProps }) {

  const [cartId, setCartId] = useLocalStorageState('cartId', '');
  const [wishList, setWishList] = useLocalStorageState('wishList', '');

    // Reducer Config //////////
  const initialState = {
    nightMode: false,
    postId: 0,
    navMenuOpen: false,
    cartMenuOpen: false,
    isWishList: false,
    selectedProductVariant: '',
    cartData: {
      id: cartId,
      lines: [],
      subtotal: '0.00',
      total: '0.00'
    },
    wishList: []
  };

  const reducer = (prevState, action) => {
    switch(action.type){
      case 'TOGGLE_NIGHT_MODE':
        return {...prevState, nightMode: !prevState.nightMode};
      case 'TOGGLE_NAV_MENU':
        return {... prevState, cartMenuOpen: false, navMenuOpen: !prevState.navMenuOpen, isWishList: false};
      case 'TOGGLE_CART_MENU':
        return {... prevState, navMenuOpen: false, cartMenuOpen: !prevState.cartMenuOpen, isWishList: false};
      case 'TOGGLE_WISHLIST':
        return {... prevState, isWishList: !prevState.isWishList};
      case 'SET_WISHLIST_TRUE':
        return {... prevState, isWishList: true};
      case 'SET_WISHLIST_FALSE':
        return {... prevState, isWishList: false};
      case 'UPDATE_CART':
        setCartId(action.value.cart.id);
        return {
          ...prevState,
          cartData: {
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
        };
      case 'ADD_TO_WISHLIST':
        const { variantId, imgSrc, price, productType, productTitle, variantTitle, productHandle, variantHandle } = action.value;

        if(prevState.wishList.find(f => f.variantId === variantId)){
          return prevState
        }
        
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
      return {
        ...prevState,
        wishList: action.value
      };
    default:
      throw new Error();
    }
  }

  const [globalState, dispatch] = useReducer(reducer,initialState);

  return <ApolloProvider client={client}>
    <GlobalStateContext.Provider value = {{globalState, dispatch}}>
      <ThemeProvider theme = {globalState.nightMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MainGrid>
          <Header>
            <Navbar />
          </Header>
          <Content>
              {/* Content Goes Here */}
              <Component {...pageProps} />
              {/* ///////////////// */}
          </Content>
          {/* <Footer>
            <FooterContent>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Illo at, similique delectus blanditiis labore nesciunt est officiis atque, 
                perspiciatis tenetur, quae ad ipsa ipsum veniam quas enim quod rem adipisci error? 
                Consectetur a odio cumque rerum dolores adipisci quos voluptatem.
              </div>
            </FooterContent>
          </Footer> */}
        </MainGrid>
      </ThemeProvider>
    </GlobalStateContext.Provider>
    </ApolloProvider>
  }