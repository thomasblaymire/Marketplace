import { useState } from 'react';
import { StyledHeader, StyledHeaderContent, StyledLogoBlock } from './styled';
import Navigation from '../Navigation';
import NavActions from '../UI/NavActions';
import Logo from '../UI/Logo';
import BurgerMenu from '../UI/BurgerMenu';
import Sidebar from '../UI/Sidebar';
import Search from '../Forms/Search';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState();
  const toggleSidebar = () => setSidebarOpen((sidebarOpen) => !sidebarOpen);

  return (
    <>
      <StyledHeader>
        <StyledHeaderContent>
          <StyledLogoBlock>
            <BurgerMenu toggleSidebar={toggleSidebar} />
            <Logo />
          </StyledLogoBlock>

          <Search />

          <NavActions />
        </StyledHeaderContent>
      </StyledHeader>
      {sidebarOpen && <Sidebar />}
      <Navigation />
    </>
  );
};

export default Header;
