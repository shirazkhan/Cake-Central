import React from 'react';
import styled from 'styled-components';

//CSS Variables
const WEBSITE_WIDTH = "1080px";
const NAV_HEIGHT = "50px";
const NAV_MENU_WIDTH = 250;
const NAV_COLOR = "";
const NAV_FONT_COLOR = "";
const CONTENT_FONT_COLOR = "";
const MOBILE = "781px";
const TABLET = "1050px";


const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "Header Header Header"
    "PrimaryContent PrimaryContent SideBar"
    "Footer Footer Footer";
  text-align: center;
  grid-template-rows: ${NAV_HEIGHT} 1fr 200px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: ${WEBSITE_WIDTH};
`;

const Header = styled.div`
  grid-area: Header;
  background: #9fa;
  height: ${NAV_HEIGHT};
  width: 100%;
  position: fixed;
  left:0;
  z-index: 1;

  
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${WEBSITE_WIDTH};
  height: 100%;
  margin: 0 auto;

  @media (max-width:${WEBSITE_WIDTH}){
    width: 100%;
  }

`;

const NavButton = styled.div`
  display: none;
  width: 300px;
  background: blue;
  text-align: left;
  margin-left: 15px;

  @media (max-width:${MOBILE}){
    display: flex;
    order: 1;
    width: 100px;
  }
`;

const Brand = styled.div`
  background: #a12;
  width: 300px;
  text-align: left;
  margin-left: 15px;
  order: 1;
  
  @media (max-width:${MOBILE}){
    order: 2;
    margin-left: 0;
    text-align: center;
  }
`;

const NavLinks = styled.div`
  background: #d42;
  width: 100%;
  display: flex;
  justify-content: center;
  order: 2;

  @media (max-width:${MOBILE}){
    display: none;
  }

`;

const NavLink = styled.a`
  padding: 0 10px 0 10px;
`;

const NightButton = styled.div`
  text-align: right;
  margin-right: 15px;
  order: 3;

  @media (max-width:${MOBILE}){
    width: 100px;
  }

`;

// Night Mode Switch
const SwitchInputUI = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

const SwitchSliderUI = styled.span`
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
    width: 20px;
    height: 20px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 100%;
  }
`;
const SwitchUI = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
  margin-bottom: 0;
  vertical-align: middle;
  ${SwitchInputUI}:checked + ${SwitchSliderUI} {
    background-color: black;
  }
  ${SwitchInputUI}:checked + ${SwitchSliderUI}:before {
    transform: translateX(20px);
  }
`;
/////////////////////


const PrimaryContent = styled.div`
  grid-area: PrimaryContent;
  background: #1aa;
  min-height: 1000px;

`;

const SideBar = styled.div`
  grid-area: SideBar;
  background: #4fc;

`;

const Footer = styled.div`
  grid-area: Footer;
  background: #f3a;

`;

const NavSideMenu = styled.div`
  display: none;
  height: 100%;
  width: ${NAV_MENU_WIDTH}px;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(4px);
  transition: ease 0.3s;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 0;
  margin-left: -${(NAV_MENU_WIDTH + 15)}px;
  margin-top: ${NAV_HEIGHT};

  &:before {
    display: none;
    height: 100%;
    width: ${NAV_MENU_WIDTH};
    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(4px);
    transition: ease 0.3s;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 0;
    opacity: 0;
    margin-left: -${(NAV_MENU_WIDTH + 15)}px;
    margin-top: ${NAV_HEIGHT};
  }

  @media (max-width:${MOBILE}){
    display: flex;
  }
`;

const NavSideMenuShadow = styled.div`
  width: calc(100% - ${NAV_MENU_WIDTH}px);
  height: 100%;
  margin-left: 50px;
  background: pink;
  position: fixed;
  top: 0;
  right: 0;
`;

// Nav Button Switch
const NavInputUI = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

const NavSliderUI = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bbcdd9;
  transition: 0.4s;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: 0.4s;
  }
`;
const NavUI = styled.label`
  position: relative;
  width: 50px;
  height: 50px;
  ${NavInputUI}:checked ~ ${NavSideMenu} {
    transform: translateX(250px);
  }
  ${NavInputUI}:checked + ${NavSliderUI}:before {
    transform: translateX(20px);
  }
`;

/////////////////////

function App() {
  return (
    <>
      <MainGrid>
        <Header>
          <NavBar id = "NavBar">
            <Brand>Shiraz Khan</Brand>
            <NavButton>
              <NavUI>
                <NavInputUI />
                <NavSliderUI />
                <NavSideMenu></NavSideMenu>
                <NavSideMenuShadow />
              </NavUI>
            </NavButton>
            <NavLinks>
              <NavLink href="/">Articles</NavLink>
              <NavLink href="/">Tutorials</NavLink>
              <NavLink href="/">Portfolio</NavLink>
              <NavLink href="/">Contact</NavLink>
            </NavLinks>
            <NightButton>
              <SwitchUI>
                <SwitchInputUI />
                <SwitchSliderUI />
              </SwitchUI>
            </NightButton>
          </NavBar>
        </Header>
        <PrimaryContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum voluptatibus illo, cumque delectus molestias ipsum, rerum aliquam harum architecto
          rem doloremquid commodi obcaecati temporibus recusandae! 
          Dolorem in officia eius nisi fugiat libero nam perspiciatis iure, 
          molestiae eveniet consectetur expedita?
        </PrimaryContent>
        <SideBar>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Inventore mollitia neque eaque error illum, beatae, porro velit ullam harum saepe provident aliquam?
          Quod rerum deserunt nemo excepturi saepe dignissimos cupiditate qui hic, iste aspernatur explicabo?
          Illum odit debitis distinctio accusamus.
        </SideBar>
        <Footer>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Illo at, similique delectus blanditiis labore nesciunt est officiis atque, 
          perspiciatis tenetur, quae ad ipsa ipsum veniam quas enim quod rem adipisci error? 
          Consectetur a odio cumque rerum dolores adipisci quos voluptatem.
        </Footer>
      </MainGrid>
    </>
  );
}

export default App;
