8;
import * as React from "react";
// import { Link } from 'react-router-dom';
import { css } from "emotion";
import styled from "react-emotion";
// import {
//   fontSemiBold,
//   colorGrayDark,
//   font10,
//   fontSpacing,
// } from 'client/ui/constants';
import { Text } from "@ui/Typography";

const Link = Text.withComponent("a");

const resetLinkStyle = css`
  &,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

export const DefaultLink = styled(Text.withComponent(Link))`
  ${resetLinkStyle};
`;

export const BoldLink = styled(DefaultLink)`
  color: #0069ed;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.5;
  font-size: 14px;
`;
