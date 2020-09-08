import { StyledHeader, StyledHeaderContent, StyledLogoBlock } from './styled';
import Navigation from '../Navigation';
import NavActions from '../UI/NavActions';
import Logo from '../UI/Logo';
import BurgerMenu from '../UI/BurgerMenu';

const Header = ({ currentUser }) => (
  <>
    <StyledHeader>
      <StyledHeaderContent>
        <StyledLogoBlock>
          <BurgerMenu />
          <Logo />
        </StyledLogoBlock>

        <NavActions />
      </StyledHeaderContent>
    </StyledHeader>
    <Navigation />
  </>
);

export default Header;
