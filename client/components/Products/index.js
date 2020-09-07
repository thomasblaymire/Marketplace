import { StyledProducts } from './styled';
import ProductCard from './ProductCard';

import tshirt1 from '../../public/static/t-shirt1.jpg';
import tshirt2 from '../../public/static/t-shirt2.jpg';
import tshirt3 from '../../public/static/t-shirt3.jpg';
import tshirt4 from '../../public/static/t-shirt4.jpg';
import tshirt5 from '../../public/static/t-shirt5.jpg';
import tshirt6 from '../../public/static/t-shirt6.jpg';
import tshirt7 from '../../public/static/t-shirt7.jpg';
import tshirt8 from '../../public/static/t-shirt8.jpg';

const productData = [
  {
    id: 1,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt1,
  },
  {
    id: 2,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt2,
  },
  {
    id: 3,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt3,
  },
  {
    id: 4,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt4,
  },
  {
    id: 5,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt5,
  },
  {
    id: 6,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt6,
  },
  {
    id: 7,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt7,
  },
  {
    id: 8,
    title: 'Nike Running Pacer long sleeve top with graphic logo in black',
    price: '$20',
    image: tshirt8,
  },
];

const Products = () => (
  <StyledProducts>
    {productData.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </StyledProducts>
);

export default Products;
