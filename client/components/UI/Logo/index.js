import Link from 'next/link';
import styled from 'styled-components';
import logo1 from '../../../public/static/logo1.svg';

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  img {
    width: 100px;
  }
`;

const Logo = () => (
  <StyledLogoWrapper>
    <Link href="/">
      <a>
        <img src={logo1} alt="Marketplace" />
      </a>
    </Link>
  </StyledLogoWrapper>
);

export default Logo;
