import React, { useReducer } from 'react';
import '../src/index.css';
import { lightTheme, darkTheme, GlobalStyle, MainGrid, Header, NavBar, Brand, NavButton, NavUILabel, NavInputUI,
         Hamburger, NavSideMenu, NavSideMenuShadow, NavLinks, NavLink,
         NightButton, SwitchUI, SwitchInputUI, SwitchSliderUI, NavMobHFade, NavMobHSpacer,
         Footer, Content, HamburgerInner1, HamburgerInner2, NavMobHMenu, NavMobHOverflow, NavFilter, FooterContent } from '../src/styled/App';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/navbar/Navbar';

export const GlobalStateContext = React.createContext();

export default function MyApp({ Component, pageProps }) {

  // Reducer ////

  const initialState = {
    nightMode: false,
    postId: 0,
    navMenuOpen: false,
    cartMenuOpen: false
  };

  const reducer = (prevState, action) => {
    switch(action.type){
      case 'TOGGLE_NIGHT_MODE':
        return {...prevState, nightMode: !prevState.nightMode};
      case 'TOGGLE_NAV_MENU':
        return {... prevState, navMenuOpen: !prevState.navMenuOpen}
      case 'TOGGLE_CART_MENU':
        return {... prevState, cartMenuOpen: !prevState.cartOpen}
    default:
      throw new Error();
    }
  }

  const [globalState, dispatch] = useReducer(reducer,initialState);

  ///////////////

  return <>
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
          <Footer>
            <FooterContent>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Illo at, similique delectus blanditiis labore nesciunt est officiis atque, 
                perspiciatis tenetur, quae ad ipsa ipsum veniam quas enim quod rem adipisci error? 
                Consectetur a odio cumque rerum dolores adipisci quos voluptatem.
              </div>
            </FooterContent>
          </Footer>
        </MainGrid>
      </ThemeProvider>
    </GlobalStateContext.Provider>
    </>
  }