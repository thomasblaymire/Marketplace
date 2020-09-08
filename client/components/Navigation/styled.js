import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: #525050;
  height: 50px;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

export const StyledNav = styled.nav`
  overflow: hidden;
  display: flex;
  align-items: center;
  max-width: 1300px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const StyledMenu = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: #fff;
    letter-spacing: 0.8px;
    line-height: 50px;
    font-size: 0.8rem;
    border: none;
    padding: 0 10px;
    background-color: #525050;
    margin: 0;
    outline: none;
    cursor: pointer;

    &:hover {
      color: #2d2d2d;
      background-color: #eee;
      font-weight: 400;
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;
