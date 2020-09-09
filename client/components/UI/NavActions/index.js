import { useState } from 'react';
import {
  StyledNavActions,
  StyledNavAction,
  StyledAdminMenu,
  StyledLogin,
  StyledLoginSpacer,
  StyledMenuList,
} from './styled';
import Router from 'next/router';
import Link from 'next/link';
import accountIcon from '../../../public/static/person.svg';
import savedIcon from '../../../public/static/download.svg';
import basketIcon from '../../../public/static/basket.svg';

const NavActions = () => {
  const [adminMenu, setAdminMenu] = useState(false);
  const onSavedClick = () => Router.push('/saved');
  const onBasketClick = () => console.log('Basket Clicked');

  console.log(adminMenu);

  const toggleAdminMenu = () => setAdminMenu((adminMenu) => !adminMenu);

  return (
    <StyledNavActions>
      <StyledNavAction onMouseEnter={toggleAdminMenu} onMouseLeave={toggleAdminMenu}>
        <img src={accountIcon} alt="Account" />
        {adminMenu && (
          <StyledAdminMenu>
            <StyledLogin>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
              <StyledLoginSpacer />
              <Link href="signin">
                <a>Sign in</a>
              </Link>
            </StyledLogin>
            <StyledMenuList>
              <li>
                <Link href="/sell">
                  <a>Sell Products</a>
                </Link>
              </li>
              <li>My Account</li>
              <li>My Preferences</li>
              <li>Manage Returns</li>
            </StyledMenuList>
          </StyledAdminMenu>
        )}
      </StyledNavAction>

      <StyledNavAction onClick={onSavedClick}>
        <img src={savedIcon} alt="Saved" />
      </StyledNavAction>

      <StyledNavAction onClick={onBasketClick}>
        <img src={basketIcon} alt="Basket" />
      </StyledNavAction>
    </StyledNavActions>
  );
};

export default NavActions;
