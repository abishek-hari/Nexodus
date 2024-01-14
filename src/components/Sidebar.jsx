import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaUserMinus, FaUserPlus, FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  const isUser = myUser;

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className='sidebar-header'>
          <Link to='/'>
            <h3 className='logo'>Nexodus</h3>
          </Link>
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
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
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-primary-2);
    margin-top: 0.2rem;
  }
  .logo {
    font-size: var(--size-2xl);
    color: var(--clr-primary-2);
  }
  .links {
    margin-bottom: 1rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: var(--size-base);
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-primary-2);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-primary-9);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.3rem 0.7rem;
    background-color: var(--clr-primary-7);
    border-radius: 0.5rem;
    max-width: fit-content;
    margin-left: 1.6rem;
  }
  .profile {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: var(--size-xl);
  }
  .auth-btn {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: var(--size-sml);
    color: var(--clr-primary-1);
  }
  @media (min-width: 768px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
