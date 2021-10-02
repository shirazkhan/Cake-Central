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
import { CREATE_CART, GET_SLUGS_BY_COLLECTION_HANDLE } from '../graphql/mutations';
import { useQuery, useMutation, gql } from "@apollo/client";
import ClientOnly from '../components/ClientOnly';
import TestComponent from '../components/TestComponent';

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
  const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
  return fragment === router.asPath ? variants[0].handle : fragment
}

// Progress Bar //////////
const progress = new ProgressBar({
  size: 3,
  color: "#8c690020",
  className: "bar-of-progress",
  delay: 0,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// Create Context //////////
export const GlobalStateContext = React.createContext();

// Reducer Config //////////
const initialState = {
  nightMode: false,
  postId: 0,
  navMenuOpen: false,
  cartMenuOpen: false,
  selectedProductVariant: '',
  cartData: {
    id: null,
    lines: [],
    subtotal: '0.00',
    total: '0.00'
  }
};

export default function MyApp({ Component, pageProps }) {

  const reducer = (prevState, action) => {
    switch(action.type){
      case 'TOGGLE_NIGHT_MODE':
        return {...prevState, nightMode: !prevState.nightMode};
      case 'TOGGLE_NAV_MENU':
        return {... prevState, cartMenuOpen: false, navMenuOpen: !prevState.navMenuOpen}
      case 'TOGGLE_CART_MENU':
        return {... prevState, navMenuOpen: false, cartMenuOpen: !prevState.cartMenuOpen}
      case 'UPDATE_CART':
        
        return {
          ...prevState,
          cartId: action.value.cartCreate.cart.id,
          cartData: {
            id: action.value.cartCreate.cart.id,
            lines: action.value.cartCreate.cart.lines.edges.map(l => (
              {
                productHandle: l.node.merchandise.product.handle,
                productTitle: l.node.merchandise.product.title,
                productId: l.node.merchandise.product.id,
                variantHandle: l.node.merchandise.sku,
                variantTitle: l.node.merchandise.title,
                variantId: l.node.merchandise.id,
                quantity: l.node.quantity,
                variantImageSrc: l.node.merchandise.image.src,
                price: l.node.estimatedCost.totalAmount.amount
              })),
            subtotal: action.value.cartCreate.cart.estimatedCost.subtotalAmount.amount,
            total: action.value.cartCreate.cart.estimatedCost.totalAmount.amount
          }
        }
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