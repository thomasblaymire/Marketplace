import styled from 'styled-components';

export const StyledProducts = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 0 auto;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
