import React from 'react';
import { MainGrid, Header, NavBar, Brand, NavButton, NavUILabel, NavInputUI,
         Hamburger, NavSideMenu, NavSideMenuShadow, NavLinks, NavLink,
         NightButton, SwitchUI, SwitchInputUI, SwitchSliderUI, PrimaryContent,
         SideBar, Footer, HamburgerInner } from './styled/App';
import TestPrimaryContent from './TestPrimaryContent';

function App() {
  return (
    <>
      <MainGrid>
        <Header>
          <NavBar>
            <Brand><h2>Shiraz Khan</h2></Brand>
            <NavButton>
              <NavUILabel>
                <NavInputUI />
                <Hamburger>
                  <HamburgerInner /> <HamburgerInner />
                </Hamburger>
                <NavSideMenu></NavSideMenu>
                <NavSideMenuShadow />
              </NavUILabel>
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
          <TestPrimaryContent />
          <TestPrimaryContent />
        </PrimaryContent>
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
