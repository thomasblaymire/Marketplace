import { StyledCard, StyledCardDetails, StyledCardTitle, StyledCardPrice } from './styled';
import Link from 'next/link';

const ProductCard = ({ product: { id, title, image, price } }) => {
  const formattedTitle = title.replace(/ +/g, '-').toLowerCase();
  return (
    <Link href={`/item/${formattedTitle}?search=${id}`}>
      <StyledCard>
        <img src={image} alt="Product Image" />
        <StyledCardDetails>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardPrice>{price}</StyledCardPrice>
        </StyledCardDetails>
      </StyledCard>
    </Link>
  );
};

export default ProductCard;
