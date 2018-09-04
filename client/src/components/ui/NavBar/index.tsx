import * as React from 'react';
import { SmallButton } from '@ui/Button';

import Modal, { withModal } from '@ui/Modal';
import styled from 'react-emotion'
import { pure } from 'recompose';
import { NAV_HEIGHT } from '@ui/constants';

const NavBarContainer = styled('div')`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #002626;
  height: ${NAV_HEIGHT}px;
`;

const AppName = pure(styled('h2')`
  color: #EFE7DA;
  font-size: 1.6rem;
`);

interface INavBar {
  show: boolean;
  onToggle(): void;
}

interface INavBarCol {
  toright?: boolean;  
}

const NavBarCol = styled('div')`
  flex: 1;
  display: flex;
  padding: 16px;
  justify-content: ${(props: INavBarCol) => props.toright ? 'flex-end' : 'flex-start'}
`;

const FormContainer = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled('form')`
  display: block;
  margin: 8px;
`;

const FormTitle = styled('h3')`
  font-size: 18px;
`;

const Input = styled('input')`
  font-family: 'Lato', sans-serif;
  display: block;
  font-size: 20px;
  font-weight: 500;
  padding: 16px 16px;
  border-radius: 6px;
  border: 1px solid #eee;
  margin: 8px 0;
  &:focus {
    outline: 0;
  }
`;

const LoginForm = () => {
  return <FormContainer>
    <FormTitle>Sign in or Register</FormTitle>
    <Form>
      <Input placeholder="Email" type="text" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm password" type="password" />
    </Form>
  </FormContainer>
}

const NavBar = (props: JSX.Element & INavBar) => {
  const { onToggle } = props;
  return <NavBarContainer>
    <NavBarCol>
      <AppName>Meet App</AppName>
    </NavBarCol>
    <NavBarCol toright>
      <SmallButton onClick={onToggle}>Log in to use all stuff</SmallButton>
    </NavBarCol>
    <Modal renderBody={LoginForm} {...props} />
  </NavBarContainer>;
}


export default withModal(NavBar);
