import Router from 'next/router';
import { StyledNavActions, StyledNavAction, StyledNavIcon } from './styled';
import accountIcon from '../../../public/static/person.svg';
import savedIcon from '../../../public/static/download.svg';
import basketIcon from '../../../public/static/basket.svg';

const NavActions = () => {
  const onSavedClick = () => Router.push('/saved');
  const onBasketClick = () => console.log('Basket Clicked');
  const onAccountClick = () => console.log('Account Click');

  const navActions = [
    {
      id: 1,
      icon: accountIcon,
      onClick: onAccountClick,
      title: 'Account',
    },
    {
      id: 2,
      icon: savedIcon,
      onClick: onSavedClick,
      title: 'Saved',
    },
    {
      id: 3,
      icon: basketIcon,
      onClick: onBasketClick,
      title: 'Basket',
    },
  ];

  return (
    <StyledNavActions>
      {navActions.map((action) => (
        <StyledNavAction onClick={action.onClick}>
          <StyledNavIcon>
            <img src={action.icon} alt={action.title} />
          </StyledNavIcon>
        </StyledNavAction>
      ))}
    </StyledNavActions>
  );
};

export default NavActions;
