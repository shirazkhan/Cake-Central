import React from 'react';
import { MainGrid, Header, NavBar, Brand, NavButton, NavUILabel, NavInputUI,
         Hamburger, NavSideMenu, NavSideMenuShadow, NavLinks, NavLink,
         NightButton, SwitchUI, SwitchInputUI, SwitchSliderUI,
         Footer, HamburgerInner1, HamburgerInner2, NavMobHMenu, NavMobHOverflow, NavFilter } from './styled/App';
import TestPrimaryContent from './TestPrimaryContent';

function App() {
  return (
    <>
      <MainGrid>
        <NavFilter />
        <Header>
          <NavBar>
            <Brand><h2>Shiraz Khan</h2></Brand>
            <NavButton>
              <NavUILabel>
                <Hamburger>
                  <NavInputUI />
                  <HamburgerInner1 /> <HamburgerInner2 />
                  <NavMobHMenu>
                    <NavMobHOverflow>
                      <NavLink href="/">Articles</NavLink>
                      <NavLink href="/">Tutorials</NavLink>
                      <NavLink href="/">Portfolio</NavLink>
                      <NavLink href="/">Contact</NavLink>
                      <NavLink href="/">Blahfafaaff</NavLink>
                      <NavLink href="/">Aohfohaif</NavLink>
                      <NavLink href="/">Portfakjfolio</NavLink>
                      <NavLink href="/">DDContact</NavLink>
                    </NavMobHOverflow>
                  </NavMobHMenu>
                </Hamburger>
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
        
        <TestPrimaryContent />
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
