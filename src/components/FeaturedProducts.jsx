import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
        <div className='section-center featured'>
          {featured.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
      <Link to='/products' className='btn all-product-btn'>
        All products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 150px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 640px) {
    .featured {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 950px) {
    .featured {
      grid-template-columns: repeat(3, 1fr);
      img {
        height: 255px;
      }
    }
  }
`;

export default FeaturedProducts;
