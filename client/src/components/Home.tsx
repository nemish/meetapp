import * as React from 'react';
import { NavButton } from '@src/components/ui/Button';

import styled from 'react-emotion'
import Meetings from './Meetings';
import { pure } from 'recompose';

const Container = styled('div')`
  background-color: #E55812;
`;

const NavBarContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #002626;
  height: 48px;
`;

const AppName = styled('h2')`
  color: #EFE7DA;
  font-size: 1.6rem;
`;

interface INavBar {
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


const NavBar = pure((props: INavBar) => {
  return <NavBarContainer>
    <NavBarCol>
      <AppName>Meet App</AppName>
    </NavBarCol>
    <NavBarCol toright>
      <NavButton>Log in to use all stuff</NavButton>
    </NavBarCol>
  </NavBarContainer>;
});


export default class Home extends React.Component<{}, {counter: number}> {
  render() {
    return <Container>
      <NavBar />
      <Meetings />
    </Container>;
  }
};
