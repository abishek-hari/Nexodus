import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const navigate = useNavigate();

  const handleOrder = () => {
    toast.success("order placed successfully");
    navigate("/");
  };

  return (
    <main>
      <PageHero title='checkout'></PageHero>
      <Wrapper className='page section-center'>
        <h3>Place your order</h3>
        <div className='order-container'>
          <div className='shipping-info'>
            <form className='form-control'>
              <h4 className='shipping-title'>Shipping information</h4>
              <label htmlFor='name'>First name</label>
              <input type='text' />
              <label htmlFor='name'>Last name</label>
              <input type='text' />
            </form>
          </div>
          <article className='shipping-totals'>
            <h5>
              Subtotal : <span>{formatPrice(total_amount)}</span>
            </h5>
            <p>
              Shipping fee : <span>{formatPrice(shipping_fee)}</span>
            </p>
            {/* <hr /> */}
            <h4>
              order total :
              <span>{formatPrice(total_amount + shipping_fee)}</span>
            </h4>
            <button className='btn' onClick={handleOrder}>
              place your order
            </button>
          </article>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  margin-bottom: 1rem;
  .order-container {
    display: grid;
    gap: 1.5rem;
    padding-top: 2.5rem;
  }
  .shipping-info {
    padding: 0.5rem 1.5rem;
    background-color: var(--clr-primary-10);
    border-radius: 0.3rem;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    height: 2rem;
    border: 1px solid var(--clr-primary-6);
    border-radius: 0.3rem;
  }
  .shipping-totals {
    display: grid;
    place-content: center;
    padding: 1rem 0;
    background-color: var(--clr-primary-10);
    border-radius: 0.5rem;
    min-width: 10rem;
  }
  h5,
  p,
  h4 {
    font-size: var(--size-base);
    padding: 0.3rem;
  }
  h3 {
    margin-top: 1rem;
    font-size: var(--size-3xl);
  }
  .shipping-title {
    font-size: var(--size-xl);
  }
  label {
    font-size: var(--size-lg);
    color: var(--clr-grey-1);
  }
  @media (min-width: 640px) {
    .order-container {
      grid-template-columns: 1fr 1fr;
    }
    .shipping-totals {
      min-width: 20rem;
    }
  }
`;
export default CheckoutPage;
