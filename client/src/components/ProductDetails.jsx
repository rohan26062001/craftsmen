// import "./ProductDetails.css";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethods';
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
// import { products } from "../data";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  ${mobile({ padding: '1rem', flexDirection: 'column' })}
`;

const Image = styled.img`
  width: 50%;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
  @media (max-width: 36em) {
    padding: 2rem;
  }
  ${mobile({ padding: '1rem' })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 1.2rem 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
  @media (max-width: 48em) {
    font-size: 1.8rem;
  }
  @media (max-width: 36em) {
    font-size: 1.2rem;
  }
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
  @media (max-width: 48em) {
    font-size: 0.8rem;
  }
  @media (max-width: 36em) {
    font-size: 0.6rem;
  }
`;

const FilterColor = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.4rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.9rem;
  padding: 0.3rem;
`;

const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.3rem;
`;

const Button = styled.button`
  color: white;
  background-color: #000;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomContainer = styled.div`

`

const ProductDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Wrapper>
        <Image src={product.img} />
        <InfoContainer>
          <BottomContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </BottomContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;
