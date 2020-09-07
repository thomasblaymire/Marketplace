import { StyledCard, StyledCardDetails, StyledCardTitle, StyledCardPrice } from './styled';

const ProductCard = ({ product: { title, image, price } }) => (
  <StyledCard>
    <img src={image} alt="Product Image" />
    <StyledCardDetails>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardPrice>${price}</StyledCardPrice>
    </StyledCardDetails>
  </StyledCard>
);

export default ProductCard;
