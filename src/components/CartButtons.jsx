import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  const isUser = myUser;

  const cartItemsCount = isNaN(total_items) ? 0 : total_items;

  return (
    <Wrapper>
      <div className='cart-btn-wrapper'>
        <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
          <span className='cart-container'>
            <FaShoppingCart className='cart-btn-icon' />
            <span className='cart-value'>{cartItemsCount}</span>
          </span>
        </Link>
        <div className='user-info'>
          {isUser && myUser.picture && (
            <img src={myUser.picture} alt={myUser.name} className='profile' />
          )}
          {myUser ? (
            <button
              type='button'
              className='auth-btn'
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              logout <FaUserMinus />
            </button>
          ) : (
            <button className='auth-btn' onClick={loginWithRedirect}>
              Login <FaUserPlus />
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cart-btn {
    padding-right: 0.5rem;
  }
  .cart-container {
    position: relative;
  }
  .cart-btn-icon {
    font-size: var(--size-lg);
    color: var(--clr-primary-1);
    margin-top: 0.5rem;
  }
  .cart-btn {
    font-size: var(--size-xl);
    color: var(--clr-primary-1);
    margin-top: 0.5rem;
    position: relative;
  }
  .cart-value {
    position: absolute;
    top: -12px;
    right: -10px;
    background: var(--clr-primary-7);
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 10px;
  }
  .auth-btn {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: var(--size-sml);
    color: var(--clr-primary-1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .user-info {
    display: none;
  }
  .profile {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: var(--size-xl);
  }
  .cart-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  /* sm */
  @media (min-width: 640px) {
    .user-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.3rem 0.7rem;
      background-color: var(--clr-primary-7);
      border-radius: 0.3rem;
    }
    .cart-btn-icon {
      font-size: var(--size-xl);
    }
    .cart-value {
      top: -16px;
      right: -12px;
      width: 15px;
      height: 15px;
      padding: 12px;
    }
  }
`;
export default CartButtons;

{
  /* To Display the user name or email */
}
{
  /* {isUser && myUser.name && (
        <h4>
          Welcome, <strong>{myUser.name.toUpperCase()}</strong>
        </h4>
      )} */
}
