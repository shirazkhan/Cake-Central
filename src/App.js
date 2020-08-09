import React from 'react';
import styled from 'styled-components';

//CSS Variables
const WEBSITE_WIDTH = "1080px";

const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "Header Header Header"
    "PrimaryContent PrimaryContent SideBar"
    "Footer Footer Footer";
  text-align: center;
  grid-template-rows: 50px 1fr 200px;
  grid-template-columns: repeat(3,calc(${WEBSITE_WIDTH}/3));
  justify-content: center;
`;

const Header = styled.div`
  grid-area: Header;
  background: #9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const NavButton = styled.div`

`;

const Brand = styled.div`

`;

const NightButton = styled.div`

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
          <NavButton>1</NavButton>
          <Brand>2</Brand>
          <NightButton>3</NightButton>
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
