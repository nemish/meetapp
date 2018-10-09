import * as React from "react";
import { SmallButton } from "@ui/Button";

import Modal, { withModal } from "@ui/Modal";
import styled from "react-emotion";
import { pure } from "recompose";
import { NAV_HEIGHT } from "@ui/constants";
import LoginForm from "@src/components/LoginForm";

const NavBarContainer = styled("div")`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #002626;
  height: ${NAV_HEIGHT}px;
  z-index: 1;
`;

const AppName = pure(styled("h2")`
  color: #efe7da;
  font-size: 1.6rem;
`);

interface INavBar {
  show: boolean;
  onToggle(): void;
}

interface INavBarCol {
  toright?: boolean;
}

const NavBarCol = styled("div")`
  flex: 1;
  display: flex;
  padding: 16px;
  justify-content: ${(props: INavBarCol) =>
    props.toright ? "flex-end" : "flex-start"};
`;

const NavBar = (props: JSX.Element & INavBar) => {
  const { onToggle } = props;
  return (
    <NavBarContainer>
      <NavBarCol>
        <AppName>Meet App</AppName>
      </NavBarCol>
      <NavBarCol toright>
        <SmallButton onClick={onToggle}>Log in to use all stuff</SmallButton>
      </NavBarCol>
      <Modal renderBody={LoginForm} {...props} />
    </NavBarContainer>
  );
};

export default withModal(NavBar);
