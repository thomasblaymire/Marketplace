import styled from 'styled-components';

export const StyledImageUpload = styled.div`
  .filepond--item {
    width: calc(50% - 0.5em);

    @media (min-width: 30em) {
      width: calc(50% - 0.5em);
    }
    @media (min-width: 50em) {
      width: calc(33.33% - 0.5em);
    }
  }
`;
