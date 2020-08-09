import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "NavContainer NavContainer NavContainer"
    "PrimaryContainer PrimaryContainer SecondaryContainer"
    "FooterContainer FooterContainer FooterContainer";
  text-align: center;
`;

const NavContainer = styled.div`
  grid-area: NavContainer;
  background: #9fa;

`;

const PrimaryContainer = styled.div`
  grid-area: PrimaryContainer;
  background: #1aa;

`;

const SecondaryContainer = styled.div`
  grid-area: SecondaryContainer;
  background: #4fc;

`;

const FooterContainer = styled.div`
  grid-area: FooterContainer;
  background: #f3a;

`;

function App() {
  return (
    <>
      <MainGrid>
        <NavContainer>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Nesciunt totam modi quia delectus, 
          nihil blanditiis illo voluptatibus officiis officia quas incidunt sapiente cumque doloribus qui, 
          molestias in est et culpa consequuntur ipsa? 
          Sunt iusto voluptatum ipsam repellendus esse expedita corrupti.
        </NavContainer>
        <PrimaryContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum voluptatibus illo, cumque delectus molestias ipsum, rerum aliquam harum architecto
          rem doloremquid commodi obcaecati temporibus recusandae! 
          Dolorem in officia eius nisi fugiat libero nam perspiciatis iure, 
          molestiae eveniet consectetur expedita?
        </PrimaryContainer>
        <SecondaryContainer>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Inventore mollitia neque eaque error illum, beatae, porro velit ullam harum saepe provident aliquam?
          Quod rerum deserunt nemo excepturi saepe dignissimos cupiditate qui hic, iste aspernatur explicabo?
          Illum odit debitis distinctio accusamus.
        </SecondaryContainer>
        <FooterContainer>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Illo at, similique delectus blanditiis labore nesciunt est officiis atque, 
          perspiciatis tenetur, quae ad ipsa ipsum veniam quas enim quod rem adipisci error? 
          Consectetur a odio cumque rerum dolores adipisci quos voluptatem.
        </FooterContainer>
      </MainGrid>
    </>
  );
}

export default App;
