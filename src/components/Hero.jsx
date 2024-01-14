import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/sofa-1.jpg";
import heroBcg2 from "../assets/sofa-4.jpg";

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content section'>
        <h1>
          Nexodus - Crafting Your
          <br />
          Comfort Oasis
        </h1>
        <p>
          Welcome to Zeden, where we transform spaces into personalized havens
          of comfort and style. Dive into a world where design meets
          functionality, and every piece of furniture tells a unique story.
          Embrace the art of living well with Zeden, your ultimate destination
          for exquisite furniture that reflects your taste and enhances your
          lifestyle.
        </p>
        <Link to='/products' className='hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg2} alt='nice table' className='main-img' />
        <img src={heroBcg} alt='person working' className='accent-img' />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 75vh;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  place-items: center;
  .hero-btn {
    padding: 0.3rem 1rem;
    border-radius: 1.5rem;
    font-size: var(--size-sm);
    background-color: var(--clr-primary-6);
    letter-spacing: 1px;
    color: var(--clr-white);
    text-transform: uppercase;
  }
  p {
    line-height: 1.7;
    max-width: 40ch;
    margin-bottom: 1rem;
    color: var(--clr-grey-5);
    font-size: var(--size-sml);
  }
  h1 {
    margin-bottom: 1.5rem;
    font-size: var(--size-2xl);
  }
  .img-container {
    display: block;
    position: relative;
    margin-bottom: 1rem;
  }
  .main-img {
    width: 100%;
    height: 15rem;
    width: 17rem;
    position: relative;
    border-radius: var(--radius);
    display: block;
    object-fit: cover;
  }
  .accent-img {
    display: none;
  }
  @media (min-width: 640px) {
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    .accent-img {
      display: none;
    }
    .main-img {
      width: 100%;
      height: 18rem;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
    .hero-btn {
      padding: 0.55rem 1.5rem;
      border-radius: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    gap: 8rem;
    h1 {
      font-size: var(--size-4xl);
      margin-bottom: 1.5rem;
    }
    p {
      max-width: 50ch;
      font-size: var(--size-lg);
    }
    .main-img {
      height: 460px;
    }
    .accent-img {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      height: 10rem;
      transform: translateX(-50%);
      border-radius: var(--radius);
      object-fit: cover;
    }
  }
`;

export default Hero;
