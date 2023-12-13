import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa6';

const Plus = ({ children, disabled }) => {
  return (
    <PlusButtonStyle disabled={disabled}>
      <div>
        {children}
        <FaPlus />
      </div>
    </PlusButtonStyle>
  );
};

const PlusButtonStyle = styled.button`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  color: var(--white);
  background: var(--gray-500, #4a4a4a);

  &:hover {
    background: var(--gray-600, #4a4a4a);
  }
  &:active {
    background: var(--gray-500, #555);
  }

  &:focus {
    border-radius: 100px;
    border: 1px solid var(--gray-800, #2b2b2b);
    background: var(--gray-700, #3a3a3a);
  }

  &:disabled {
    background: var(--gray-300, #ccc);
    border: none;
  }
`;

export default Plus;
