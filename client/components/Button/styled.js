import styled, { css } from 'styled-components';

export const StyledIcon = styled.img`
  transition: color 0.15s ease-in-out;
  width: 20px;
  height: 20px;
`;

export const StyledButton = styled.button`
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border: ${({ outline }) => (outline ? '2px solid #525252' : '0px')};
  user-select: none;
  background-color: ${({ outline }) => (outline ? 'transparent' : '#2dce89')};
  color: ${({ outline }) => (outline ? '#525252' : '#ffffff')};
  font-size: 0.9rem;
  letter-spacing: 0.7px;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    outline: 0;
    background: ${({ outline }) => (outline ? '#525252' : ' #1a9c65')};
    box-shadow: 0;
    color: white;
  }

  &:disabled {
    box-shadow: none;
    pointer-events: none;
  }
`;
