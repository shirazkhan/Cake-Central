import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "Header Header Header"
    "PrimaryContent PrimaryContent SideBar"
    "Footer Footer Footer";
  text-align: center;
  grid-template-rows: 60px 1fr 120px;
`;

const Header = styled.div`
  grid-area: Header;
  background: #9fa;

`;

const PrimaryContent = styled.div`
  grid-area: PrimaryContent;
  background: #1aa;

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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Nesciunt totam modi quia delectus, 
          nihil blanditiis illo voluptatibus officiis officia quas incidunt sapiente cumque doloribus qui, 
          molestias in est et culpa consequuntur ipsa? 
          Sunt iusto voluptatum ipsam repellendus esse expedita corrupti.
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
