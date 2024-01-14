import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import { HiMenuAlt2 } from "react-icons/hi";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle' onClick={openSidebar}>
            <HiMenuAlt2 className='hamburger__icon' />
          </button>
          <Link to='/'>
            <h3 className='logo'>Nexodus</h3>
          </Link>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink to={url} className='link'>
                  {text}
                </NavLink>
              </li>
            );
          })}
          {myUser && (
            <li>
              <NavLink to='checkout' className='link'>
                checkout
              </NavLink>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem;
    height: 3.5rem;
    background: var(--clr-primary-10);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .nav-toggle {
    border: none;
    outline: none;
    background: none;
  }
  .hamburger__icon {
    font-size: var(--size-xl);
    color: var(--clr-primary-1);
  }
  .logo {
    font-size: var(--size-xl);
    font-weight: var(--font-semi-bold);
    color: var(--clr-primary-1);
  }
  .link {
    font-size: var(--size-base);
    font-weight: var(--font-medium);
    text-decoration: none;
    color: var(--clr-primary-1);
  }
  .active {
    background-color: var(--clr-primary-7);
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    color: var(--clr-white);
  }
  .nav-links {
    display: none;
  }
  /* sm */
  @media (min-width: 640px) {
    .logo {
      font-size: var(--size-2xl);
    }
    .hamburger__icon {
      font-size: var(--size-2xl);
      color: var(--clr-primary-1);
    }
  }
  /* md */
  @media (min-width: 768px) {
    .link {
      font-size: var(--size-sml);
    }
    .nav-links {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }
  }
  @media (min-width: 1024px) {
    .link {
      font-size: var(--size-lg);
    }
    .logo {
      font-size: var(--size-3xl);
    }
    .hamburger__icon {
      display: none;
    }
  }
`;

export default Nav;
