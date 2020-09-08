import { StyledHeader, StyledHeaderContent } from './styled';
import Navigation from '../Navigation';
import NavActions from '../UI/NavActions';
import Logo from '../UI/Logo';

const Header = ({ currentUser }) => (
  <>
    <StyledHeader>
      <StyledHeaderContent>
        <Logo />
        <NavActions />
      </StyledHeaderContent>
    </StyledHeader>
    <Navigation />
  </>
);

export default Header;
