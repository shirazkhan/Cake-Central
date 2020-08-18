import React from 'react';
import styled from 'styled-components';
import { MainGrid, Header, NavBar, Brand, NavButton, NavUI, NavInputUI,
         NavSliderUI, NavSideMenu, NavSideMenuShadow, NavLinks, NavLink,
         NightButton, SwitchUI, SwitchInputUI, SwitchSliderUI, PrimaryContent,
         SideBar, Footer } from './styled/App';

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
