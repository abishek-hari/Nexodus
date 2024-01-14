import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImgs from "../assets/sofa-2.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <img src={aboutImgs} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Crafting Moments, Shaping Spaces</h2>
            <div className='underline'></div>
          </div>
          <p>
            At Zeden, we don't just sell furniture; we curate experiences. Our
            passion lies in transforming houses into homes, blending style with
            functionality. With a commitment to quality and an eye for detail,
            Zeden is your trusted partner in creating living spaces that
            resonate with your unique personality. Discover the art of living
            well with Zeden - where every piece of furniture tells a story, and
            your comfort is our top priority.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  height: 100%;
  margin-bottom: 1rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 15rem;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    img {
      height: 20rem;
    }
  }
`;
export default AboutPage;
