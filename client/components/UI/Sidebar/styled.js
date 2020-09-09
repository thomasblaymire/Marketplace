import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 320px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #fff;
  transform: translateX(0);
  transition: transform 0.25s ease-out;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const StyledCategory = styled.div`
  padding: 16px 16px;
`;
