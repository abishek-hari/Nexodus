import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 0.3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1rem;
    button {
      background: transparent;
      border-color: transparent;
      cursor: pointer;
      padding: 1rem 0;
      width: 2rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default AmountButtons;
