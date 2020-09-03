import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import React from 'react';

//CSS Variables
const WEBSITE_WIDTH = "1080px";
const MOBILE_NAV_HEIGHT = "50px";
const DESKTOP_NAV_HEIGHT = "60px";
const FOOTER_HEIGHT = "200px";
const NAV_MENU_WIDTH = "250px";
const NAV_GAP = "50px";
const NAV_LINKS_ALIGNMENT = "flex-end";
const CONTENT_H_MARGIN = "25px";
const CONTENT_V_MARGIN = "0px";
const HAMBURGER_COLOR = "white";
const NAV_FONT_COLOR = "#ff7e6d";
const FOOTER_FONT_COLOR = "white";
const FOOTER_COLOR = "black";
const MOBILE = "781px";
//const TABLET = "1050px";
const NAVFILTER_COLOR = "white";

export const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "Header Header Header"
    "Content Content Content"
    "Footer Footer Footer";
  grid-template-rows: ${MOBILE_NAV_HEIGHT} auto ${FOOTER_HEIGHT};
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: ${WEBSITE_WIDTH};
  background: ${props => props.theme.main}
`;

MainGrid.defaultProps = {
  theme: {
    main: "pink"
  }
}

export const Header = styled.div`
  grid-area: Header;
  /* background: linear-gradient(270deg, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.2), rgba(0,0,0,0.35));
    background-size: 600% 600%;
    animation: Fader 15s ease infinite; */
  color: ${NAV_FONT_COLOR};
  height: ${DESKTOP_NAV_HEIGHT};
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 6;
  backdrop-filter: blur(14px);
  box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.8);
    
  @keyframes Fader {
    0%{background-position:2% 0%}
    50%{background-position:99% 100%}
    100%{background-position:2% 0%}
  }

  @media (max-width:${MOBILE}){
    height: ${MOBILE_NAV_HEIGHT};
  }
  
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${WEBSITE_WIDTH};
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 6;

  @media (max-width:${WEBSITE_WIDTH}){
    width: 100%;
  }

`;

export const NavFilter = styled.div`
  width: 100vw;
  position: fixed;
  height: ${DESKTOP_NAV_HEIGHT};
  background: ${NAVFILTER_COLOR};
  top: 0px;
  left: 0;
  z-index: 3;
  transition: 1s;

  @media (max-width:${MOBILE}){
    height: ${MOBILE_NAV_HEIGHT};
  }
`;

export const NavButton = styled.div`
  display: none;
  width: 300px;
  text-align: left;
  margin-left: ${NAV_GAP};

  @media (max-width:${MOBILE}){
    display: flex;
    order: 1;
    width: 100px;
    margin-left: 15px;
  }
`;

export const Brand = styled.div`
  width: 300px;
  text-align: left;
  margin-left: ${NAV_GAP};
  order: 1;
  cursor: pointer;
  
  @media (max-width:${MOBILE}){
    order: 2;
    margin-left: 0;
    text-align: center;
    margin-left: 15px;
  }
`;

export const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${NAV_LINKS_ALIGNMENT};
  order: 2;
  margin-right: ${NAV_GAP};

  @media (max-width:${MOBILE}){
    display: none;
  }

`;

export const NavLink = styled.a`
  padding: 0 10px 0 10px;
  color: #ff7e6d;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
`;

export const NightButton = styled.div`
  text-align: right;
  margin-right: ${NAV_GAP};
  order: 3;

  @media (max-width:${MOBILE}){
    width: 100px;
    margin-right: 15px;
  }

`;

// Night Mode Switch
export const SwitchInputUI = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

export const SwitchSliderUI = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bbcdd9;
  transition: 0.4s;
  border-radius: 100px;

  &:before {
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 100%;
  }
`;
export const SwitchUI = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 15px;
  margin-bottom: 0;
  vertical-align: middle;
  ${SwitchInputUI}:checked + ${SwitchSliderUI} {
    background-color: black;
  }
  ${SwitchInputUI}:checked + ${SwitchSliderUI}:before {
    transform: translateX(15px);
  }
`;
/////////////////////


export const Content = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: row;
  min-height: 1000px;
  margin: ${CONTENT_V_MARGIN} ${CONTENT_H_MARGIN};
  font-size: 1.2rem;
  line-height: 30px;

  @media (max-width:${MOBILE}){
    flex-direction: column;
  }

`;

export const HeroContent = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: row;
  min-height: 700px;
  margin: ${CONTENT_V_MARGIN} ${CONTENT_H_MARGIN};

  @media (max-width:${MOBILE}){
    flex-direction: column;
  }

`;

export const Primary = styled.div`
  width: 100%;
  padding: 0 25px 0 25px;
    img{
        max-width: 100%;
        display: block;
        object-fit: contain;
        margin: 0 auto;
    }

  @media (max-width:${MOBILE}){
    padding: 0;
  }
`;

export const Secondary = styled.div`
  width: 30%;
  height: 100%;
  position: sticky;
  top: ${DESKTOP_NAV_HEIGHT};

  @media (max-width:${MOBILE}){
    width: 100%;
    top: ${MOBILE_NAV_HEIGHT};
  }

`;

export const Footer = styled.div`
  grid-area: Footer;
  background: ${FOOTER_COLOR};
  padding: 30px 25px;
  color: ${FOOTER_FONT_COLOR};
`;

export const NavSideMenu = styled.div`
  display: none;
  height: 100%;
  width: ${NAV_MENU_WIDTH};
  background: rgba(0,0,0,1);
  backdrop-filter: blur(4px);
  transition: ease 0.3s;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 10;
  margin-left: calc(-${NAV_MENU_WIDTH} - 15px);
  margin-top: ${MOBILE_NAV_HEIGHT};


  @media (max-width:${MOBILE}){
    display: flex;
  }
`;

export const NavSideMenuShadow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  position: fixed;
  display: none;
  visibility: hidden;
  top: 0;
  right: 0;
  margin-top: ${MOBILE_NAV_HEIGHT};
  transition: 0s;
  z-index: -1;
  opacity: 0;
  backdrop-filter: blur(4px);
  transition: visibility 1s, opacity 0.6s;
  
  @media (max-width:${MOBILE}){
    display: flex;
  }
`;

export const NavMobHMenu = styled.div`
    position: fixed;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    top: 30px;
    left: 0;
    background: rgba(0,0,0,0.8);
    transition: 0.3s ease;
    transform: scaleY(0.0001);
    color: white;
    box-shadow: 0px 5px 18px -3px rgba(0,0,0,0.75);
`;

export const NavMobHOverflow = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    text-align: center;
    overflow: scroll;
    position: absolute;
    display: flex;
    justify-content: left;
    align-items: center;
    ::-webkit-scrollbar {
    display: none;
}
`;

export const NavMobHFade = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 10;
    background: radial-gradient(circle, rgba(0,0,0,0) 75%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,1) 95%, rgba(0,0,0,1) 100%);
    pointer-events: none;
`;

export const NavMobHSpacer = styled.div`
    height: 100%;
    padding-right: 30px;
`;

export const Hamburger = styled.span`
  width: 50px;
  height: ${MOBILE_NAV_HEIGHT};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  top: -10px;
`;

export const HamburgerInner1 = styled.span`
    height: 3px;
    width: 22px;
    display: flex;
    background: ${HAMBURGER_COLOR};
    margin: 2px 0;
    border-radius: 5px;
    transition: 0.3s ease;
`;

export const HamburgerInner2 = styled.span`
    height: 3px;
    width: 22px;
    display: flex;
    background: ${HAMBURGER_COLOR};
    margin: 2px 0;
    border-radius: 5px;
    transition: 0.3s ease;
`;

// Nav Button Switch
export const NavInputUI = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

export const NavUILabel = styled.label`
  position: relative;
  width: 50px;
  height: 50px;

  ${NavInputUI}:checked ~ ${NavSideMenu} {
    transform: translateX(250px);
  }

  ${NavInputUI}:checked ~ ${NavSideMenuShadow} {
    z-index: 9;
    opacity: 1;
    visibility: visible;
    transition: visibility 0s, opacity 0.8s;
  }
  ${NavInputUI}:checked ~ ${HamburgerInner1} {
    transform: scale(0.9) rotate(-45deg) translate3d(0px, 5px, 0px);
    margin-left: -5px;
  }
  ${NavInputUI}:checked ~ ${HamburgerInner2} {
    transform: scale(0.9) rotate(45deg) translate3d(0px, -5px, 0px);
    margin-left: -5px;
  }
  ${NavInputUI}:checked ~ ${NavMobHMenu} {
    transform: translateY(17.5px) scaleY(1);
  }
`;

export const darkTheme = {
  body_background: '#000',
  content_color: '#DDD',
  navfilter_color: 'rgba(50,50,50,0.5)',
  nav_font_color: 'white',
  nav_brand_color: 'white'
}

export const lightTheme = {
  body_background: '#FFF',
  content_color: '#000',
  navfilter_color: 'rgba(250,250,250,0.6)',
  nav_font_color: 'black',
  nav_brand_color: 'black'
}

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.body_background};
    color: ${props => props.theme.content_color};
    transition: 1.5s;
  }

  // Wordpress Styling

  .has-text-align-left{
    text-align: left;
  }

  .has-text-align-center{
    text-align: center;
  }

  .has-text-align-right{
    text-align: right;
  }

  .uppercase{
    text-transform: uppercase;
  }

  .alignfull{
    width:100%;
  }

  .wp-block-image{
    margin-bottom: 1em;
  }

  .alignfull{
    margin-top: 5rem;
    margin-right: auto;
    margin-bottom: 5rem;
    margin-left: auto;
    max-width: 100vw;
    position: relative;
    width: 100%;
  }

  blockquote{
    border-color: #cd2653;
    border-style: solid;
    border-width: 0 0 0 0.2rem;
    color: inherit;
    font-size: 1em;
    margin: 4rem 0;
    padding: 0.5rem 0 0.5rem 2rem;
    max-width: 58rem;
    width: calc(100% - 4rem);

    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    cite {
      display: block;
      margin: 1rem 0 0 0;
      color: #6d6d6d;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.25;
    }
  }

  ////////////////////
  
  ${NavFilter}{
    background-color: ${props => props.theme.navfilter_color};
  }

  ${NavLink}{
    color: ${props => props.theme.nav_font_color};
    @media (max-width:${MOBILE}){
    font-weight: 300;
    color: white;
  }
  }

  ${Brand}{
    color: ${props => props.theme.nav_brand_color};
  }

  ${HamburgerInner1}{
    background: ${props => props.theme.nav_brand_color};
  }

  ${HamburgerInner2}{
    background: ${props => props.theme.nav_font_color};
  }

`;