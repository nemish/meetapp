import * as React from "react";

import styled from "react-emotion";

interface IButton {
  type?: string;
}

export const PureButton = styled("button")`
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  backround: none;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  &:hover,
  &:focus {
    background: none;
  }

  &:focus {
    outline: 0;
  }
`;

export const Button = styled(PureButton)`
  background: ${(props: IButton) =>
    props.type === "danger" ? "#f24a37" : "#0069ed"};
  color: #ffffff;
  transition: background 250ms ease-in-out, transform 150ms ease;
  &:hover,
  &:focus {
    background: ${(props: IButton) =>
      props.type === "danger" ? "#e33d2a" : "#0053ba"};
  }

  padding: 1rem 2rem;
  border-radius: 5px;

  &:focus {
    outline: 0;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const SmallButton = styled(Button)`
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
`;

export default Button;
