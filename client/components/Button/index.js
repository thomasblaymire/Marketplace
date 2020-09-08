import React, { Fragment } from 'react';
import { StyledButton, StyledIcon } from './styled';
import loadingIcon from '../../public/static/loading.svg';

const Button = ({ loading, disabled, icon: Icon, children, outline, ...props }) => (
  <StyledButton disabled={disabled || loading} outline={outline} {...props}>
    {loading ? (
      <img src={loadingIcon} alt="Loading" />
    ) : (
      <Fragment>
        {Icon && <StyledIcon src={Icon} outline={outline} />}
        {children}
      </Fragment>
    )}
  </StyledButton>
);
export default Button;
