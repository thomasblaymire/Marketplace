import { StyledHeader } from './styled';
import Navigation from '../Navigation';

const Header = ({ currentUser }) => (
  <>
    <StyledHeader>{currentUser}</StyledHeader>
    <Navigation />
  </>
);

export default Header;
