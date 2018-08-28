import * as React from 'react';

import styled from 'react-emotion'

export default styled('button')`
  display: inline-block;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, 
              transform 150ms ease;
  &:hover,
  &:focus {
    background: #0053ba;
  }
  
  &:focus {
    outline: 0;
    outline-offset: -4px;
  }
  
  &:active {
    transform: scale(0.99);
  }
`;
