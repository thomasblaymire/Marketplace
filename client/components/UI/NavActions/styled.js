import styled from 'styled-components';

export const StyledNavActions = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
`;

export const StyledNavAction = styled.button`
  background-color: transparent;
  border: none;
  max-height: 60px;
  padding: 12px 15px;
  display: block;
  cursor: pointer;
  position: relative;
`;

export const StyledAdminMenu = styled.div`
  background: white;
  position: absolute;
  min-width: 300px;
  margin-top: 1.1rem;
  right: 5px;

  border: 1px solid #ddd;
  box-shadow: -2px 2px 4px 0 rgba(45, 45, 45, 0.14);
  /* transform: translateY(calc(-100% - 5px));
  transition: transform 0.6s;
  transition-delay: 0.25s; */
  min-height: 255px;
  max-height: calc(100vh - 200px);
`;

export const StyledLogin = styled.div`
  background: #eeeeee;
  padding: 1rem;
  display: flex;
  color: #666666;

  a {
    letter-spacing: 0.4px;
    cursor: pointer;
    display: inline;
    text-decoration: underline;
    color: #666666;
  }
`;

export const StyledLoginSpacer = styled.div`
  &:before {
    content: '|';
    display: block;
    padding: 0 0.5em;
    color: #666;
  }
`;

export const StyledMenuList = styled.ul`
  padding: 0;
  list-style: none;
  text-align: left;
  line-height: 50px;
  margin: 0;

  li {
    padding: 0rem 1.5rem;
    color: #2d2d2d;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      color: #0770cf;
    }

    a {
      color: #2d2d2d;
      text-decoration: none;
      &:hover {
        color: #0770cf;
      }
    }
  }
`;
