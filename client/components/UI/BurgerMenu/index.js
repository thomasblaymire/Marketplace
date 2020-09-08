import { StyledBurgerMenu, StyledBurger } from './styled';
import burgerIcon from '../../../public/static/hamburger.svg';

const BurgerMenu = () => (
  <StyledBurgerMenu>
    <StyledBurger src={burgerIcon} alt="Hamburger Menu Trigger" />
  </StyledBurgerMenu>
);

export default BurgerMenu;
