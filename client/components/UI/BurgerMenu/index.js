import { StyledBurgerMenu, StyledBurger } from './styled';
import burgerIcon from '../../../public/static/hamburger.svg';

const BurgerMenu = ({ toggleSidebar }) => (
  <StyledBurgerMenu onClick={toggleSidebar}>
    <StyledBurger src={burgerIcon} alt="Hamburger Menu Trigger" />
  </StyledBurgerMenu>
);

export default BurgerMenu;
