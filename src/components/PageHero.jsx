import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center section'>
        <h3>
          <Link to='/'>Home</Link>
          <span className='page-hero'>
            {product && <Link to='/products'>/ Products</Link>}/ {title}
          </span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
