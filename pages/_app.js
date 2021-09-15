import React, { useReducer, useEffect } from 'react';
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
import { Provider } from 'next-auth/client';
import Providers from 'next-auth/client';

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
  const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
  return fragment === router.asPath ? variants[0].handle : fragment
}

const progress = new ProgressBar({
  size: 3,
  color: "#8c6900",
  className: "bar-of-progress",
  delay: 0,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export const GlobalStateContext = React.createContext();

export default function MyApp({ Component, pageProps }) {
  // Reducer ////

  const initialState = {
    nightMode: false,
    postId: 0,
    navMenuOpen: false,
    cartMenuOpen: false,
    selectedProductVariant: ''
  };

  const reducer = (prevState, action) => {
    switch(action.type){
      case 'TOGGLE_NIGHT_MODE':
        return {...prevState, nightMode: !prevState.nightMode};
      case 'TOGGLE_NAV_MENU':
        return {... prevState, cartMenuOpen: false, navMenuOpen: !prevState.navMenuOpen}
      case 'TOGGLE_CART_MENU':
        return {... prevState, navMenuOpen: false, cartMenuOpen: !prevState.cartMenuOpen}
    default:
      throw new Error();
    }
  }

  const [globalState, dispatch] = useReducer(reducer,initialState);

  ///////////////

  return <Provider>
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
    </Provider>
  }