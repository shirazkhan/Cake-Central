import React from 'react';
import styled from 'styled-components';

//CSS Variables
const WEBSITE_WIDTH = "1080px";
const NAV_HEIGHT = "50px";
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

const NavButtonContainer = styled.div`
  display: none;
  width: 300px;
  background: #5da;
  text-align: left;
  margin-left: 15px;

  @media (max-width:${MOBILE}){
    display: flex;
    order: 1;
    width: 100px;
  }
`;

const NavButton = styled.div`
  background: pink;
  height: 50px;
  width: 50px;
`;

const NavSideMenu = styled.div`
  display: none;
  height: 100%;
  width: 250px;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(4px);
  transition: ease 0.3s;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 0;
  opacity: 0;
  margin-left: -250px;

${NavButton}:hover & {
    opacity: 1;
    margin-left: -15px;
  }

  @media (max-width:${MOBILE}){
    display: flex;
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

  &:hover ${NavBar} {
    background:blue;
  }
`;

const NightButton = styled.div`
  background: #7a2;
  width: 300px;
  text-align: right;
  margin-right: 15px;
  order: 3;

  @media (max-width:${MOBILE}){
    width: 100px;
  }

`;

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

function App() {
  return (
    <>
      <MainGrid>
        <Header>
          <NavBar>
            <Brand>Shiraz Khan</Brand>
            <NavButtonContainer>
              <NavButton>
              <NavSideMenu>
            <NavLink href="/">Articles</NavLink>
            <NavLink href="/">Tutorials</NavLink>
            <NavLink href="/">Portfolio</NavLink>
            <NavLink href="/">Contact</NavLink>
          </NavSideMenu> 
              </NavButton>
            </NavButtonContainer>
            <NavLinks>
              <NavLink href="/">Articles</NavLink>
              <NavLink href="/">Tutorials</NavLink>
              <NavLink href="/">Portfolio</NavLink>
              <NavLink href="/">Contact</NavLink>
            </NavLinks>
            <NightButton>3</NightButton>
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
