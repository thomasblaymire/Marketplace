import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  width: 50%;
  display: none;
  position: relative;

  @media (min-width: 992px) {
    display: block;
  }

  button {
    position: absolute;
    right: 0;
    height: 100%;
    border: 0;
    height: 38px;
    border-radius: 19px/50%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  height: 38px;
  border-radius: 19px/50%;
  padding-left: 16px;
  padding-right: 46px;
  box-sizing: border-box;
  color: #2d2d2d;
  outline: 0;
`;
