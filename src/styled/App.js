import styled from 'styled-components';
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
const NAV_FONT_COLOR = "white";
const CONTENT_FONT_COLOR = "black";
const FOOTER_FONT_COLOR = "white";
const FOOTER_COLOR = "black";
const MOBILE = "781px";
//const TABLET = "1050px";
const NAVFILTER_COLOR = "darkviolet";


export const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "Header Header Header"
    "Content Content Content"
    "Footer Footer Footer";
  text-align: center;
  grid-template-rows: ${MOBILE_NAV_HEIGHT} auto ${FOOTER_HEIGHT};
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: ${WEBSITE_WIDTH};

`;

export const Header = styled.div`
  grid-area: Header;
  background: linear-gradient(270deg, rgba(10,10,10,0.8), rgba(10,10,10,0.5), rgba(10,10,10,0.8));
    background-size: 600% 600%;
    animation: Fader 25s ease infinite;
  color: ${NAV_FONT_COLOR};
  height: ${DESKTOP_NAV_HEIGHT};
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 6;
  backdrop-filter: blur(8px);
  box-shadow: 0px 5px 18px -3px rgba(0,0,0,0.75);
    
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
  position: absolute;
  z-index: 6;

  @media (max-width:${WEBSITE_WIDTH}){
    width: 100%;
  }

`;

export const NavFilter = styled.div`
  width: 100vw;
  position: fixed;
  height: ${MOBILE_NAV_HEIGHT};
  background: ${NAVFILTER_COLOR};
  top: 0px;
  left: 0;
  z-index: 3;
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
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export function Linkk({ href, name }) {
    // Must add passHref to Link
    return (
      <Link href={href} passHref>
        <NavLink>poop</NavLink>
      </Link>
    )
  }

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
  color: ${CONTENT_FONT_COLOR};

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
  color: ${CONTENT_FONT_COLOR};

  @media (max-width:${MOBILE}){
    flex-direction: column;
  }

`;

export const Primary = styled.div`
  width: 100%;
  text-align: left;
    img{
        max-width: 100%;
        display: block;
        object-fit: contain;
        margin: 0 auto;
    }
`;

export const Secondary = styled.div`
  width: 30%;

  @media (max-width:${MOBILE}){
    width: 100%;
  }

`;

export const Footer = styled.div`
  grid-area: Footer;
  background: ${FOOTER_COLOR};
  padding: 30px 15px;
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

/////////////////////